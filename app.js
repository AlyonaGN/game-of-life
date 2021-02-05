const commander = require('commander');
const fileInitializer = require('./src/modules/fileInitializer');
const randomInitializer = require('./src/modules/randomInitializer');
const { runGame } = require('./src/modules/gameManager');

commander.command('random')
    .alias('r')
    .description('Start a new Game Of Life with random parametres.')
    .action(() => {
       runGame(randomInitializer);
    });

commander.command('file')
    .option('--path <filePath>', 'File path')
    .alias('f')
    .description('Start a new Game Of Life with parameteres from a file.')
    .action((options) => {
        fileInitializer.setPath(options.path);
        runGame(fileInitializer);
    });

commander.parse(process.argv);
