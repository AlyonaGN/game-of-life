const commander = require('commander'),
    { prompt } = require('inquirer'),
    chalk = require('chalk'),
    fs = require('fs');

commander.command('random')
    .alias('r')
    .description('Start a new Game Of Life with random parametres.')
    .action(() => {
        console.log('I am working!');
    });

commander.parse(process.argv);