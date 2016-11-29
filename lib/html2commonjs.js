const util = require('util');
const TEMPLATE = 'module.exports=\'%s\'';

html2jsCommonjs.$inject = ['logger'];
module.exports = html2jsCommonjs;


function escapeContent(content) {
  return content.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
}

function html2jsCommonjs(logger) {
  var log = logger.create('preprocessor.html2commonjs');

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path += '.js';
    done(util.format(TEMPLATE, escapeContent(content)));
  };
}