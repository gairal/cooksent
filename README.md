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
* [Logging](#logging)
* [Contribute](#contribute)
    * [File structure](#file-structure)
    * [Getting Started](#getting-started)
        * [Dependencies](#dependencies)
        * [Installing](#installing)
        * [Running the app](#running-the-app)
* [License](#license)

## Installation
```
npm install loggout
```
```
yarn add loggout
```

## Logging Options
``` js
{
    level: Loggout.LEVELS.info,
    prefix: level => `LOGG(${level}):`,
}
```
### level
Log levels follows [RFC5424] ordering.

``` js
static get LEVELS() {
    return {
        silly: 10,
        debug: 20,
        verbose: 30,
        info: 40,
        warn: 50,
        error: 60,
    };
}
```

Default level: `error`

Levels can be assessed  through `Loggout.LEVELS` constant.

### Prefix
Prefix options expects a function receiving the level as parameter and returning a string.
``` js
(level) => {
    const ts = Date.now();
    switch (level) {
        case Loggout.LEVELS.silly:
            return `SILLY - ${ts}:`;
        case Loggout.LEVELS.debug:
            return `DEBUG - ${ts}:`;
        case Loggout.LEVELS.verbose:
            return `LOG - ${ts}:`;
        case Loggout.LEVELS.info:
            return `INFO - ${ts}:`;
        case Loggout.LEVELS.warn:
            return `WARN - ${ts}:`;
        case Loggout.LEVELS.error:
            return `ERROR - ${ts}:`;
        default:
            return '';
    }
}
```

## Contribute
### File structure
```
loggout/
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
* `fork` the github repo [https://github.com/gairal/loggout](https://github.com/gairal/loggout)
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
[RFC5424]: https://tools.ietf.org/html/rfc5424
