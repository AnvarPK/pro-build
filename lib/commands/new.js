var fs = require('fs-extra');
var exec = require('child_process').exec;

module.exports = newCmd;
function newCmd(name) {
    var app = './' + name;
    fs.mkdirs(app, function(err) {
        if (err) return console.error(err);
        fs.copy(__dirname + '/../../blueprints/app', app, function(err) {
            if (err) return console.error(err)
            console.log("CH project '%s' is created!", name);
            // exec('npm i '+app, (err, stdout, stderr) => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }
            //     console.log(stdout);
            // });
        });
    });

}