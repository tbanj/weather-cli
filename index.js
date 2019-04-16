const minimist = require('minimist');
const error = require('./utils/error');
const version = require('./commands/version');
const help = require('./commands/help');
const today = require('./commands/today');

module.exports = ()=> {
    const args = minimist(process.argv.slice(2));
    let command = args._[0] || 'help';

    if (args.version || args.v) {
        command = 'version';
    }
    if (args.help || args.h) {
        command = 'help';
    }

    switch (command) {
        case 'today':
            today(args);
            console.log('this is meant to execute a today function');
            break;
        
        case 'tomorrow':
           console.log('this is meant to execute a tomorrow function');
            
            break;

        case 'version':
            version();
            
            break;
        
        case 'help':
           help(args);
            
            break;
        default:
            // console.log('this show the current weather');
            error(`"${command}" is not a valid command`, true);
            break;
    }
}