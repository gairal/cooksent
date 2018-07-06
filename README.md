# CookSent

Straight simple cookie consent popin using local storage

> Developped with [Babel](https://babeljs.io), [webpack](http://webpack.github.io), [Jest](https://facebook.github.io/jest/) and :heart:

## Motivation
Simple and lightweight reusable cookie consent module for web dev

## Usage
Here is the simplest way to init and use the cookie consent.
You can find more examples in the `examples/` directory of this repo.

``` js
import Cooksent from 'cooksent';
const cooksent = Cooksent.factory();
```

---

# Table of Contents
* [Installation](#installation)
* [Consent Options](#consent-options)
* [Contribute](#contribute)
    * [File structure](#file-structure)
    * [Getting Started](#getting-started)
        * [Dependencies](#dependencies)
        * [Installing](#installing)
        * [Running the app](#running-the-app)
* [License](#license)

## Installation
```
npm install cooksent
```
```
yarn add cooksent
```

## Consent Options
Default values:
``` js
{
    selector: 'js-cooksent',
    btnSelector: 'js-cooksent__btn',
    title: 'Cookie Consent',
    description: 'By continuing your navigation without changing your cookie settings, you accept the use of cookies to analyse and measure audience, attendance, navigation and redirection from external websites.',
    btnLabel: 'ok',
    onConsent: () => {},
    storageKey: 'COOKSENT',
}
```

### selector
Main popin section class selector

### btnSelector
Consent button class selector

### title
Popin title

### description
Popin description

### btnLabel
Popin button label

### storageKey
Key used in local storage to memorise the user consent

### onConsent
onConsent expects a function that will be executed when the user clicks on the consent button.

## Contribute
### File structure
```
cooksent/
 ├──src/                             * our source files that will be compiled to javascript
 |   ├──app/                         * Lib sources
 │   │
 |   └──examples/                    * examples sources
 │       ├──index.pug                * our index.html
 │       │
 │       ├──html/                    * where you keep your pug templates
 │       │   └──layout.pug           * the main pug layout
 │       │
 │       └──app/                     * JavaScript/ES2015 files
 │
 ├──test/                            * Jest test definitions
 │
 ├──webpack/                         * Webpack configuration files
 │   ├──webpack.config.base.js       * Base config
 │   ├──webpack.config.js            * Development overrides
 │   └──webpack.config.prod.js       * Production overrides
 │
 └──package.json                     * package.json
```
### Getting Started
#### Dependencies
You need to install the following on you system
* `node` and `npm`
* Ensure you running Node version >= 8.0.0

#### Installing
* `fork` the github repo [https://github.com/gairal/cooksent](https://github.com/gairal/cooksent)
* `clone` your fork
* `npm install` to install all dependencies
* `make start` or `npm start` to start the dev server

#### Running the app
After all dependencies are installed, just run `make start` to start a local server using `webpack-dev-server` which will watch your files and build them.
webpack-dev-server will display the address and port of your server (by default, `http://0.0.0.0:3000`).

### Build commands
#### Server
```bash
# build files then launch the server and watch files
make start
```
#### Build files
```bash
# build files in ./build/ (Webpack, Sass, Pug) and validate them
make build
# "compile" files in ./dist/
# minify and concatenate assets
make release
```
#### Validate files
```bash
# runs the validations eslint and jest tests
make test
```

## License
[MIT](/LICENSE.md)

#### Author: [Frank Gairal]

[Frank Gairal]: http://github.com/gairal
