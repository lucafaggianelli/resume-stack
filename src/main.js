import Alpine from 'alpinejs'

import '../styles/common.scss'
import '../styles/main.scss'

import { initDesigner } from './designer'
import resume from '../resume'

initDesigner()

Alpine.data('resume', () => ({ resume }))
Alpine.start()
