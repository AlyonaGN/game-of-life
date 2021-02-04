const commander = require('commander'),
    { prompt } = require('inquirer'),
    chalk = require('chalk'),
    fs = require('fs');
const { playRandom } = require('./src/modules/playRandom')

commander.command('random')
    .alias('r')
    .description('Start a new Game Of Life with random parametres.')
    .action(() => {
        console.log(playRandom());
    });

commander.parse(process.argv);