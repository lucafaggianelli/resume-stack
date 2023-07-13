import { Pane } from 'tweakpane'

const KEY_EXPANDED = 'rsDesignerExpanded'

const pane = new Pane({
  title: 'Resume Designer',
  expanded: localStorage.getItem(KEY_EXPANDED) === 'true',
  container: document.getElementById('builder-container'),
})

// Remember if the pane is expanded or not
document.querySelector('.tp-rotv_b').addEventListener('click', () => {
  localStorage.setItem(KEY_EXPANDED, pane.expanded)
})

const findCssVariables = () => {
  const globalStyle = getComputedStyle(document.documentElement)
  const cssVariables = []

  // Scan all stylesheets for the :root[designer-params] selector
  // so we're sure to get all the CSS variables for the resume
  // and not CSS variables from other libraries
  for (const styleSheet of document.styleSheets) {
    for (const rule of styleSheet.cssRules) {
      if (rule.selectorText === ':root[designer-params]') {
        for (const variableName of rule.style) {
          if (variableName.startsWith('--')) {
            const rawValue = globalStyle.getPropertyValue(variableName).trim()
            let value = rawValue
            let suffix = undefined

            // If it's a numeric value, parse it and extract the suffix
            // so the user can change the value without having to type the suffix
            const matchNumericValue = rawValue.match(/^(\d*\.?\d+)(.*)$/)
            if (matchNumericValue) {
              value = parseFloat(matchNumericValue[1])
              suffix = matchNumericValue[2]
            }

            cssVariables.push({
              name: variableName,
              variableName,
              rawValue,
              value,
              suffix,
            })
          }
        }
      }
    }
  }

  cssVariables.sort((a, b) => a.name.localeCompare(b.name))

  return cssVariables
}

const setVariable = (variableName, value, suffix = '') => {
  document.documentElement.style.setProperty(variableName, value + suffix || '')
}

const getDefaultValues = (cssVariables) =>
  cssVariables.reduce((acc, { variableName, value }) => {
    acc[variableName] = value
    return acc
  }, {})

const addCssVariablesToPane = (cssVariables) => {
  const defaultValues = getDefaultValues(cssVariables)

  cssVariables.forEach(({ name, variableName, suffix }) => {
    pane.addInput(defaultValues, name).on('change', ({ value }) => {
      setVariable(variableName, value, suffix)
    })
  })
}

const jsObjectToCssRule = (obj) => {
  const variables = Object.entries(obj)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n')

  return `:root {\n${variables}\n}`
}

export const initDesigner = () => {
  const cssVariables = findCssVariables()
  addCssVariablesToPane(cssVariables)

  // Add export button
  pane.addButton({ title: 'Copy CSS to clipboard' }).on('click', () => {
    const preset = pane.exportPreset()
    const cssCode = jsObjectToCssRule(preset)

    console.log('Your CSS variables have been copied to the clipboard!')
    console.log('Here the same code if you need it:')
    console.log(cssCode)

    navigator.clipboard.writeText(cssCode)
  })

  pane.addButton({ title: 'Reset' }).on('click', () => {
    cssVariables.forEach(({ variableName, value, suffix }) => {
      setVariable(variableName, value, suffix)
    })

    const defaultValues = getDefaultValues(cssVariables)
    pane.importPreset(defaultValues)
  })
}
