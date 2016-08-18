'use strict';

var isValid = require('is-valid-app');

module.exports = function(app, base, env) {
  if (!isValid(app, 'generate-contributing')) return;

  /**
   * Plugins
   */

  app.use(require('generate-defaults'));

  /**
   * Generate a `contributing` file to the current working directory. You can override
   * the default template by adding a custom template to `~/templates/contributing.md`
   * (in user home on your system).
   *
   * ```sh
   * $ gen contributing
   * $ gen contributing --dest ./docs
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
