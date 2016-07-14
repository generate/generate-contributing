'use strict';

var isValid = require('is-valid-app');

module.exports = function(app, base, env) {
  if (!isValid(app, 'generate-contributing')) return;

  /**
   * Plugins
   */

  app.use(require('generate-defaults'));

  /**
   * Generate a `contributing` file to the current working directory.
   *
   * You can override the default template by adding a custom template
   * at the following path: `~/templates/contributing.md` (in user home).
   *
   * To override the destination directory, you can either:
   *  - pass the path on the `-d` or `--dest` flag.
   *  - pipe the [generate-dest](https://github.com/generate/generate-dest) plugin before `contributing`.
   *
   * ```sh
   * $ gen contributing
   * $ gen contributing --dest ./docs
   * $ gen dest contributing
   * ```
   * @name contributing
   * @api public
   */

  app.task('contributing', {silent: true}, function(cb) {
    return app.src('templates/contributing.md', {cwd: __dirname})
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd));
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
