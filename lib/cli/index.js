var program = require('commander');
var pjson = require('../../package.json');
var requireDir = require('require-dir');
var commands = requireDir('../commands/'); //imports modules from directory as func

program
    .version(pjson.version)
    .usage('<command>');

program
    .command('new <name>')
    .description('creates a new ch project')
    .action(function(name) {
        commands.new(name);
    });

program
    .command('serve')
    .description('serve the project')
    .action(function(name) {
        commands.serve();
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

program
    .command('*')
    .action(function(env) {
        console.log('Invalid command');
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
} else {
    // console.log('Keywords: ' + program.args);
}


module.exports = function() {
    return program;
}