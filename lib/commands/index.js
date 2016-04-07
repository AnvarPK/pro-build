var fs = require('fs-extra');
var path = require('path');
var newCd = require('./new');
var serveCd = require('./serve');

module.exports.newCmd = newCmd;
module.exports.serveCmd = serveCmd;

function newCmd(name) {
    newCd(name);
}

function serveCmd() {
    serveCd();
}