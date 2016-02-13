var concat = require('broccoli-concat');
var filterES6Modules = require('broccoli-es6-module-filter');
var mergeTrees = require('broccoli-merge-trees');
var moveFile = require('broccoli-file-mover');
var pickFiles = require('broccoli-static-compiler');
var uglifyJavaScript = require('broccoli-uglify-js');
var wrapFiles = require('broccoli-wrap');

var trees = [
  createAMDTree(),
  createCommonJSTree(),
  createStandaloneTree(),
];

module.exports = mergeTrees(trees);

function createAMDTree() {
  // build/vanilla-masker.amd.js: all AMD compiled modules concatenated into 1 file
  var amd = filterES6Modules('lib', {
    moduleType: 'amd',
    anonymous: false
  });

  amd = concat(amd, {
    inputFiles: ['**/*.js'],
    outputFile: '/vanilla-masker.amd.js'
  });

  return amd;
}

function createCommonJSTree() {
  // CommonJS version of vanilla-masker.js; will be located in 'build/commonjs'
  var commonJs = pickFiles('lib', {
    srcDir: '/',
    destDir: '/commonjs'
  });

  commonJs = filterES6Modules(commonJs, {
    moduleType: 'cjs'
  });

  // rename vanilla-masker.js to main.js
  commonJs = moveFile(commonJs, {
    srcFile: '/commonjs/vanilla-masker.js',
    destFile: '/commonjs/main.js'
  });

  return commonJs;
}

function createStandaloneTree() {
  // build/vanilla-masker.js: global version of vanilla-masker.js
  var begin = '(function(root) {\n';
  var end = [];
  end.push("root.VMasker = requireModule('vanilla-masker');");
  end.push('}(this));');
  end = end.join('\n');

  var browser = pickFiles('vendor', {
    files: ['loader.js'],
    srcDir: '/',
    destDir: '/'
  });
  browser = mergeTrees([browser, createAMDTree()]);
  browser = concat(browser, {
    inputFiles: ['loader.js', '*.js'],
    outputFile: '/vanilla-masker.js'
  });
  browser = wrapFiles(browser, {
    wrapper: [begin, end],
    extensions: ['js']
  });

  // build/vanilla-masker.min.js
  var minified = pickFiles(browser, {
    srcDir: '/',
    destDir: '/'
  });
  minified = moveFile(minified, {
    srcFile: '/vanilla-masker.js',
    destFile: '/vanilla-masker.min.js'
  });
  minified = uglifyJavaScript(minified, {
    mangle: true
  });

  return mergeTrees([browser, minified]);
}
