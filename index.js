// var emissary = require('emissary');
var AtomJsHint = require('./lib/atom-jshint.js');

module.exports = {
  configDefaults: {
    hintOnSave: true
  },
  activate: function(){
    return this.atomJsHint = new AtomJsHint();
  },
  deactivate: function(){
    return this.atomJsHint.destroy();
  }
};
