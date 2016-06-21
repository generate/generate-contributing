'use strict';

var path = require('path');
var isValid = require('is-valid-app');
var src = path.resolve.bind(path, __dirname, 'templates');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-contributing')) return;

  /**
   * Generate a `contributing` file to the current working directory. You can override
   * the default template by adding a custom template at the following path:
   * `~/templates/contributing.md` (in user home).
   *
   * ```sh
   * $ gen contributing
   * ```
   * @name contributing
   * @api public
   */

  app.task('contributing', {silent: true}, function(cb) {
    var dest = app.option('dest') || app.cwd;

    app.use(require('generate-collections'));
    app.use(require('generate-defaults'));
    app.template(src('contributing.md'));

    return app.toStream('templates', pickFile(app))
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(dest))
      .pipe(app.dest(dest));
  });

  app.task('default', {silent: true}, ['contributing']);
};

/**
 * Pick the file to render. If the user specifies a `--file`, use that,
 * otherwise use the default `$package.json` template
 */

function pickFile(app, fallback) {
  return function(key, file) {
    return file.stem === (app.option('file') || fallback || 'contributing');
  };
}
