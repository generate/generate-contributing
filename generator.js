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
   * ```sh
   * $ gen contributing
   * $ gen contributing --dest ./docs
   * ```
   * @name contributing
   * @api public
   */

  app.task('default', ['contributing']);
  app.task('contributing', {silent: true}, function(cb) {
    return file(app, 'templates/contributing.md');
  });

  /**
   * Generate an `issue_template.md` file to the `.github/` directory, or specified `--dest`.
   *
   * ```sh
   * $ gen contributing:it
   * $ gen contributing:it --dest ./docs
   * # also aliased as the following (mostly for API usage)
   * $ gen contributing:issue_template
   * ```
   * @name contributing:it
   * @api public
   */

  app.task('it', ['issue_template']);
  app.task('issue_template', {silent: true}, function(cb) {
    return file(app, 'templates/issue_template.md');
  });

  /**
   * Generate a bare bones `issue_template.md` file to the `.github/` directory, or specified `--dest`.
   * Uses [this template](templates/issue_template_basic.md).
   *
   * ```sh
   * $ gen contributing:itb
   * $ gen contributing:itb --dest ./docs
   * # also aliased as the following (mostly for API usage)
   * $ gen contributing:issue_template_detailed
   * ```
   * @name contributing:itb
   * @api public
   */

  app.task('itb', ['issue_template_basic']);
  app.task('issue_template_basic', {silent: true}, function(cb) {
    return file(app, 'templates/issue_template_basic.md');
  });

  /**
   * Generate a detailed `issue_template.md` file to the `.github/` directory, or specified `--dest`.
   * Uses [this template](templates/issue_template_detailed.md)
   *
   * ```sh
   * $ gen contributing:itd
   * $ gen contributing:itd --dest ./docs
   * # also aliased as the following (mostly for API usage)
   * $ gen contributing:issue_template_detailed
   * ```
   * @name contributing:itd
   * @api public
   */

  app.task('itd', ['issue_template_detailed']);
  app.task('issue_template_detailed', {silent: true}, function(cb) {
    return file(app, 'templates/issue_template_detailed.md');
  });

  /**
   * Generate a `pull_request_template.md` file to the `.github/` directory, or specified `--dest`.
   * Uses [this template](templates/pull_request_template.md).
   *
   * ```sh
   * $ gen contributing:pr
   * $ gen contributing:pr --dest ./docs
   * # also aliased as the following (mostly for API usage)
   * $ gen contributing:pull_request_template
   * ```
   * @name contributing:pr
   * @api public
   */

  app.task('pr', ['pull_request_template']);
  app.task('pull_request_template', {silent: true}, function(cb) {
    return file(app, 'templates/pull_request_template.md');
  });

  /**
   * Generate a detailed `pull_request_template.md` file to the `.github/` directory, or specified `--dest`.
   * Uses [this template](templates/pull_request_template_detailed.md).
   *
   * ```sh
   * $ gen contributing:prd
   * $ gen contributing:prd --dest ./docs
   * # also aliased as the following (mostly for API usage)
   * $ gen contributing:pull_request_template_detailed
   * ```
   * @name contributing:prd
   * @api public
   */

  app.task('prd', ['pull_request_template_detailed.md']);
  app.task('pull_request_template_detailed.md', {silent: true}, function(cb) {
    return file(app, 'templates/pull_request_template_detailed.md.md');
  });
};

/**
 * Generate files that match the given `pattern`
 */

function file(app, pattern) {
  return app.src(pattern, { cwd: __dirname })
    .pipe(app.renderFile('*')).on('error', console.log)
    .pipe(app.conflicts(app.cwd))
    .pipe(app.dest(app.cwd));
}
