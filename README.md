# generate-contributing [![NPM version](https://img.shields.io/npm/v/generate-contributing.svg?style=flat)](https://www.npmjs.com/package/generate-contributing) [![NPM downloads](https://img.shields.io/npm/dm/generate-contributing.svg?style=flat)](https://npmjs.org/package/generate-contributing) [![Build Status](https://img.shields.io/travis/generate/generate-contributing.svg?style=flat)](https://travis-ci.org/generate/generate-contributing)

Generate a contributing.md file for a project. Can be used as a plugin or sub-generator in a higher-level generator.

## What is generate?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md). Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

For more information about Generate:

* Visit the [generate project](https://github.com/generate/generate)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## Usage

```js
var contributing = require('generate-contributing');
```

## CLI

**Help**

Get general help and a menu of available commands:

```sh
$ gen help
```

**Running the `contributing` generator**

Once both [generate](https://github.com/generate/generate) and `generate-contributing` are installed globally, you can run the generator with the following command:

```sh
$ gen contributing
```

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

## Tasks

### [contributing](generator.js#L34)

Generate a `contributing` file to the current working directory. To use a different destination directory, pass the path on the `-d` or `--dest` flag.

**Example**

```sh
$ gen contributing
$ gen contributing --dest ./docs
```

### [contributing:setup](generator.js#L53)

Prepare questions and merge data to be used for prompts from the `base` instance onto the context.

**Example**

```sh
$ gen contributing:setup
```

## API

### Install locally

If you want to use `generate-contributing` as a plugin or sub-generator to extend the features and settings in your own generator, you must first install it locally:

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-contributing
```

### Use as a plugin

Use as a [plugin](https://github.com/generate/generate/blob/master/docs/plugins.md) if you want to extend your own generator with the features, settings and tasks of `generate-contributing`, as if they were created on your generator:

```js
module.exports = function(app) {
  app.use(require('generate-contributing'));
};
```

Visit Generate's [plugin docs](https://github.com/generate/generate/blob/master/docs/plugins.md) to learn more about plugins.

### Use as a sub-generator

Use as a [sub-generator](https://github.com/generate/generate/blob/master/docs/generators.md) if you want to add `generate-contributing` to a  _namespace_ in your generator:

```js
module.exports = function(app) {
  // register the generate-contributing with whatever name you want
  app.register('foo', require('generate-contributing'));
};
```

Visit Generate's [sub-generator docs](https://github.com/generate/generate/blob/master/docs/sub-generators.md) to learn more about sub-generators.

## About

### Related projects

* [generate-eslint](https://www.npmjs.com/package/generate-eslint): Generate a `.eslintrc.json` or `.eslintignore` file as part of a larger build workflow. This generator… [more](https://github.com/generate/generate-eslint) | [homepage](https://github.com/generate/generate-eslint "Generate a `.eslintrc.json` or `.eslintignore` file as part of a larger build workflow. This generator can be used as a sub-generator or plugin inside other generators.")
* [generate-license](https://www.npmjs.com/package/generate-license): Generate a license file for a GitHub project. | [homepage](https://github.com/generate/generate-license "Generate a license file for a GitHub project.")
* [generate-project](https://www.npmjs.com/package/generate-project): Scaffold out complete code projects from the command line, or use this generator as a… [more](https://github.com/generate/generate-project) | [homepage](https://github.com/generate/generate-project "Scaffold out complete code projects from the command line, or use this generator as a plugin in other generators to provide baseline functionality.")
* [generate-travis](https://www.npmjs.com/package/generate-travis): Generate a .travis.yml file to the cwd or specified directory. Install globally and run with… [more](https://github.com/generate/generate-travis) | [homepage](https://github.com/generate/generate-travis "Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-contributing/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 13, 2016._