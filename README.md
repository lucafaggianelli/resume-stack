## Resume Stack

The easiest way to design and maintain your resume with web technologies
and generate a PDF from it.

![A preview of Resume Stack in the browser](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/browser-window.png)

🖐 Don't forget to 🌟 star this repo if you like it!
💥 More templates are coming!

## 🤷‍♀️ What's a stack?

In the software jargon a *stack* is a set of components used to execute an
application or more generally a system.

And that's what Resume Stack is, an ensemble of HTML, CSS,
[TailwindCSS](https://tailwindcss.com/) and *invisible* 👻 JavaScript
to give you a resume!

> Invisible 🙄 … well behind the scene there's some JavaScript into the stack:
[AlpineJS](https://alpinejs.dev/) to *connect* the content of your resume
to the HTML page and [Vite](https://vitejs.dev/)
to reflect changes in the code to the browser in realtime.
Though you won't see and you won't write any JavaScript!

## 🚀 Get Started

### Codespaces (Quickest ⚡)

> [Codespaces](https://github.com/features/codespaces) is a Github feature that
> « Spin up fully configured dev environments in the cloud that start in seconds »

Click on the *Code* button in this repo, then on the *Codespaces* tab
and *Create a Codespace on main*.

![Create a new Codespace](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/create-codespace.png)

A new tab will open in your browser, just wait few seconds and a code editor
and a preview pane with the resume will appear.

![A Codespace environment with a preview pane](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/codespaces.png)

If you edit the `resume.json` file, changes will be reflected in the UI.

### Local dev (The standard way)

To develop your resume locally on your PC you need:
- [git](https://git-scm.com/downloads)
- A recent version of [NodeJS](https://nodejs.org/en)
- The [`yarn`](https://yarnpkg.com/getting-started/install) package manager

1. Create a new repository using `resume-stack` as template,
    clicking on the green *Use this template* button and then
    *Create a new repository*.
    Or, as a shortcut, click on [this link](https://github.com/new?template_name=resume-stack&template_owner=lucafaggianelli).

    ![Create a repo from a template](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/use-this-template.png)

2. Clone the newly created repository via [git](https://git-scm.com/downloads)
    or equivalent tools (i.e. Github Desktop, etc.) or obtain the source code
    downloading it as a zip file.

3. Install the project dependencies:

```bash
# Run this in a terminal
yarn
```

4. Run the development server and click on the link printed in the terminal,
    typically [http://localhost:5173](http://localhost:5173):

```bash
# Run this in a terminal
yarn dev
```

![Browser window with the project running](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/browser-window.png)


## Usage

Once you have the project running, either on Codespaces,
on your computer or anywhere else, you can finally edit
and export your resume.

### ✍ Content

Edit the `resume.json` file modifying the existing properties.
If you don't need something, that is, a specific property or
even an entire section, you can delete it.

### 📷 Images

To use images you need to specify their URLs in the `resume.json`
file.

If you have the image yourself, you can add it anywhere into the
`public/` folder like the `public/logo/company-1.svg` image, in that
case the URL of the image is a *relative* one and is equivalent
to the file path starting after `public`, so in the previous example
it would be `/logo/company-1.svg`.

Image URLs can also be *absolute*, that is starting with `http://` or `https://`
like the one used as an example profile picture
`https://i.pravatar.cc/150?u=myprofile`, in this case the image
is hosted by someone else on a server.

### 📃 Export to PDF

To export your resume in PDF just print the browser page
from the browser menu or
hitting `Ctrl + P` (win, linux) or `⌘ + P` (mac) on the keyboard.
Then be sure to select these options:

- PDF format
- No margins
- Include background graphics

*(the specific naming may vary depending on OS and browser)*

![Chrome print options](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/print-options.png)


### 🎨 Styling

The resume design can be customized in 2 ways: via a user-friendly
UI (the *Resume Designer*) or changing the HTML and CSS
source code of the resume itself.

#### 🎮 Resume Designer

The *Resume Designer* provides some styling options in a
user friendly UI, the available options depend on the
specific resume template in use:

![Resume Designer UI](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/resume-designer-ui.png)

Once you're happy with the new settings, click on the
*Copy CSS to clipboard* button and paste the content
into the `styles/main.scss` file, you'll find some helpful
comment to understand where to paste the code.

#### 👩‍💻 Modify the resume template

If you want to customize your resume more than what is possible
via the Resume Designer, then you need to modify the source code
itself.

A resume template is defined by an HTML file that contains the
structure of the resume and by 1 or more (S)CSS files that contain
the styling, specifically these files are:

- `index.html`
- `styles/main.scss`

> ℹ SCSS is an extension over the CSS language as it provides more
advanced features than plain CSS, you're not obliged to use it
though!

For more information on how to customize these files, check the
section [Creating a template](#-creating-a-template)

## 🌟 Automatic PDF Export

If you want to step-up your game and love automations, then you'll
love this!

Resume Stack includes a Github Actions *Workflow*
that automatically generates a PDF from your resume everytime
you push a code change to your Github repo.

The exported PDFs are available as *Releases* in your repo, the
release name is the date of the release, so you can easily
find different versions of your resume:

![Resume latest release](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/resume-latest-release.png)

To download the PDF, just click on the release and find the PDF
among the assets:

![Download release's PDF](https://raw.githubusercontent.com/lucafaggianelli/resume-stack/main/docs/images/resume-release-details.png)


### Setup Github Actions

When you create a Github repo from a template or you fork
another repo, Github disables the workflows for security
reasons, so the Workflow included with Resume Stack must be
manually enabled:

1. click on the *Actions* tab in your repository
2. click the *Enable workflow* button
3. click on the *Settings* tab
4. in the left-side menu, click on *Actions* > *General*
5. in *Workflow permissions* choose *Read and write permissions*
6. save the settings

> 👉 *Read and write permissions* are required by the workflow
  for creating the releases

## 👩‍🎨 Creating a template

> A more detailed guide on how to create templates is coming

The `index.html` file support is an [AlpineJS](https://alpinejs.dev/) template,
check their website for the syntax.

The resume content is available as the `resume` variable in the AlpineJS template.

You can use [TailwindCSS](https://tailwindcss.com/) classes and custom CSS/SCSS
styles, just modify the `styles/main.scss` or create a new file and import it
in `main.scss`.

The Resume Designer is setup automatically, it picks the CSS variables defined
in `main.scss`, you can add other variables to the rule `:root[designer-params] {}`.
