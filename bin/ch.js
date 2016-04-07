#!/usr/bin/env node


var program = require('commander');
var pjson = require('../package.json');
var command = require('../lib/commands/');



program
    .version(pjson.version)
    .usage('<command>')
    .parse(process.argv);

program
    .command('new <name>')
    .description('creates a new ch project')
    .action(function(name) {
        command.newCmd(name);
    });

program
    .command('serve')
    .description('serve the project')
    .action(function(name) {
        command.serveCmd();
    });
// program
//     .command('exec <cmd>')
//     .description('run the given remote command')
//     .action(function(cmd) {
//         console.log('exec "%s"', cmd);
//     });

// program
//     .command('teardown <dir> [otherDirs...]')
//     .description('run teardown commands')
//     .action(function(dir, otherDirs) {
//         console.log('dir "%s"', dir);
//         if (otherDirs) {
//             otherDirs.forEach(function(oDir) {
//                 console.log('dir "%s"', oDir);
//             });
//         }
//     });

// program
//     .command('*')
//     .description('deploy the given env')
//     .action(function(env) {
//         console.log('deploying "%s"', env);
//     });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
} else {
    // console.log('Keywords: ' + program.args);
}