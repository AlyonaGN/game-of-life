const commander = require('commander');
const fileInitializer = require('./src/modules/fileInitializer');
const randomInitializer = require('./src/modules/randomInitializer');
const { runGame } = require('./src/modules/gameManager');
const { ERROR_MESSAGES } = require('./src/utils/consts');

//обработчик игры в режиме "random"
commander.command('random')
    .alias('r')
    .description('Start a new Game Of Life with random parametres.')
    .action(async () => {
       await runGame(randomInitializer);
    });

//обработчик игры в режиме "file"
commander.command('file')
    .option('--path <filePath>', 'File path')
    .alias('f')
    .description('Start a new Game Of Life with parameteres from a file.')
    .action(async (options) => {
        try {
            fileInitializer.setPath(options.path);
            await runGame(fileInitializer);  
        } catch (error) {
            const { message = ERROR_MESSAGES.UNKNOWN_ERR } = error;
            console.log(message);
        }
    });

commander.parse(process.argv);
