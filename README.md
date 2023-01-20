[React App Rewire Multiple Entry] lets you configure multiple entries in [Create React App]
without ejecting.

## Usage

1. Add [React App Rewire Multiple Entry] to your [Rewired] React app:

```bash
npm install --save-dev react-app-rewired react-app-rewire-multiple-entries
```

2. Modify `package.json`

```diff
  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

3. Add [React App Rewire Multiple Entry] to `config-overrides.js` in your React app
   directory:

### Basic Usage

```js
// config-overrides.js
const addMultipleEntries = require('react-app-rewire-multiple-entries');

const addEntries = addMultipleEntries([
  {
    entry: 'src/extension/content',
    template: 'public/extension.html',
    outPath: 'ignored/content.html'
  },
  {
    entry: 'src/extension/worker',
    template: 'public/extension.html',
    outPath: 'ignored/worker.html'
  }
]);

module.exports = {
  webpack: function(config, env) {
    addEntries(config);
    return config;
  }
};
```

### Work with [customize-cra]

```js
// config-overrides.js

const addMultipleEntries = require('react-app-rewire-multiple-entries');

const {
  // addBundleVisualizer,
  override,
  overrideDevServer
} = require('customize-cra');

module.exports = {
  webpack: override(
    addMultipleEntries([
      {
        entry: 'src/extension/content',
        template: 'public/extension.html',
        outPath: 'ignored/content.html'
      },
      {
        entry: 'src/extension/worker',
        template: 'public/extension.html',
        outPath: 'ignored/worker.html'
      }
    ])
    // addBundleVisualizer()
  )
};
```

### More Examples

```js
// config-overrides.js
const addMultipleEntries = require('react-app-rewire-multiple-entries');

const addEntries = addMultipleEntries([
  {
    // Webpack extra entry
    entry: 'src/entry/standard.js',
    // HTML template used in plugin HtmlWebpackPlugin
    template: 'src/entry/standard.html',
    // The file to write the HTML to. You can specify a subdirectory
    outPath: '/entry/standard.html'
    // Visit: http[s]://localhost:3000/entry/standard.html
  },
  {
    entry: 'src/entry/login.js',
    // if [template] is empty, Default value: `public/index.html`
    // template: 'public/index.html',
    outPath: 'public/login.html'
    // Visit: http[s]://localhost:3000/public/login.html
  },
  {
    entry: 'src/entry/404.js',
    template: 'public/404.html'
    // if [outPath] is empty, calculated by `path.relative(process.cwd(), template)` --> `public/404.html`
    // outPath: '/public/404.html'
    // Visit: http[s]://localhost:3000/public/404.html
  },
  {
    entry: 'src/entry/home.js'
    // Default value: `public/index.html`
    // template: 'public/index.html',
    // Calculated by `path.relative(process.cwd(), template)` --> `public/index.html`
    // outPath: '/public/index.html'
    // Visit: http[s]://localhost:3000/public/index.html
  }
]);

module.exports = {
  webpack: function(config, env) {
    addEntries(config);
    return config;
  }
};
```

## API

### Options

You can pass a array of entry configuration options to `react-app-rewire-multiple-entry`, the entry in the array has attributes below:

- `entry` [Required] Webpack entry JS file. Throw error when empty.
- `template` [Optional] HTML template used in plugin [HtmlWebpackPlugin]. Default value: `public/index.html`.
- `outPath`: [Optional] The file wirte the HTML to. You can specify a subdirectory. **If empty, it will be calculated by `path.relative(process.cwd(), template)`**

### Method

- `addMultiEntry` Inject settings for multiple entry in webpack config

That’s it! Now you can control mulitple entries, enjoy coding!

---

[create react app]: https://github.com/facebook/create-react-app
[react app rewire multiple entry]: https://github.com/Derek-Hu/react-app-rewire-multiple-entry
[customize-cra]: https://github.com/arackaf/customize-cra#readme
[rewired]: https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project
[htmlwebpackplugin]: https://github.com/jantimon/html-webpack-plugin
