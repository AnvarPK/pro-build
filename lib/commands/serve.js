var fs = require('fs-extra');
var exec = require('child_process').exec;

module.exports = function() {
    exec('gulp', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}