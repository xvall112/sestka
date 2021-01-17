## The main business logic of the theme

- **|----assets**
- **|----common**
- **|----components** *The reusable and stand-alone components are stored here, by following [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)*
- **|----|----atoms** *These are small functional components that are not using any other atomic components*
- **|----|----molecules** *Tese are those functional components which have dependencies from other atoms*
- **|----|----organisms** *These are the functional components that are using other molecules and atoms*
- **|----layouts**
- **|----|----Main** *The main layout: header navigation, the main container and footer part*
- **|----|----Minimal** *The minimal layout*
- **|----theme** *In this folder there are overrides of the default color palette and typography coming from MUI*
- **|----views** *All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations.*
- **|----App.js** *This is the main starting point file, which instantiates React router and renders the application views. If you are not using react-scripts you may delete or ignore the `App.js` file*
- **|----serviceWorker.js** *React Scripts specific file. If you are not using react-scripts you may delete or ignore the `serviceWorker.js` file*