'use strict';

const fs = require('fs');
const gulp = require('gulp');
const babel = require('gulp-babel');
const shelljs = require('shelljs');
const resolveCwd = require('./scripts/resolveCwd');
const getBabelCommonConfig = require('./scripts/getBabelCommonConfig');
const replaceLib = require('./scripts/replaceLib');

function babelify(modules) {
  const babelConfig = getBabelCommonConfig(modules);
  if (modules === false) {
    babelConfig.plugins.push(replaceLib);
  }

  return gulp
    .src([`src/**/*.js`, `src/**/*.jsx`])
    .pipe(babel(babelConfig))
    .pipe(gulp.dest(modules !== false ? 'lib' : 'es'));
}

function cleanCompile(cb) {
  if (fs.existsSync(resolveCwd('lib'))) {
    shelljs.rm('-rf', resolveCwd('lib'));
  }
  if (fs.existsSync(resolveCwd('es'))) {
    shelljs.rm('-rf', resolveCwd('es'));
  }
  cb();
}

function render_lib(cb) {
  babelify();
  cb();
}

function render_es(cb) {
  babelify(false);
  cb();
}

exports.default = gulp.series(cleanCompile, render_lib, render_es);
