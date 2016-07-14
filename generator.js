'use strict';

var path = require('path');
var utils = require('./utils');

module.exports = function(app, base, env) {
  if (!utils.isValid(app, 'generate-contributing')) return;

  /**
   * Build variables
   */

  var src = path.resolve.bind(path, __dirname, 'templates');

  /**
   * Use other generators as plugins
   */

  app.use(require('generate-collections'));
  app.use(require('generate-defaults'));

  /**
   * Generate a `contributing` file to the current working directory.
   *
   * You can override the default template by adding a custom template
   * at the following path: `~/templates/contributing.md` (in user home).
   *
   * To use a different destination directory, you can either:
   *  - pass the path on the `-d` or `--dest` flag.
   *  - pipe the [generate-dest](https://github.com/generate/generate-dest)
   * plugin before `contributing`.
   *
   * ```sh
   * $ gen contributing
   * $ gen contributing --dest ./docs
   * $ gen dest contributing
   * ```
   * @name contributing
   * @api public
   */

  app.task('contributing', ['setup'], function (cb) {
    var destFlag = app.options.d || app.options.dest || false;
    destFlag = destFlag ? path.resolve(destFlag) : false;
    var cwd = destFlag || base.options.dest || app.cwd;
    return app.src(src('contributing.md'))
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(cwd))
      .pipe(app.dest(cwd));
  });

  /**
   * Prepare questions and merge data to be used for prompts from the `base` instance
   * onto the context.
   *
   * ```sh
   * $ gen contributing:setup
   * ```
   * @name contributing:setup
   * @api public
   */

  app.task('setup', function(cb) {
    app.data(app.base.cache.data);
    app.use(utils.commonQuestions());
    cb();
  });

  /**
   * Alias for the `contributing` task to allow running the generator
   * with the following command:
   *
   * ```sh
   * $ gen contributing
   * ```
   * @name default
   */

  app.task('default', { silent: true }, ['contributing']);
};
