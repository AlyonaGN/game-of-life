const { readFile } = require('../utils/filesHandler');
const { validateParametrs, validateFile } = require('../utils/validator');
const { ERROR_MESSAGES } = require('../utils/consts');

//переменная, хранящая путь до файла - её значение устанавливается при получении файла (в app.js)
let filePath;

//функция, получающая информацию из файла и возвращающая её наружу
const parseFile = (file) => {
    const gameParameters = file.split(/\r?\n/);

    //валидация файла на соответствие формату
    const fileValidationMessages = validateFile(gameParameters);

    if (fileValidationMessages.length === 0) {
        const width = parseInt(gameParameters[0]);
        const height = parseInt(gameParameters[1]);
        //доска, представляющая собой двумерный массив рядов
        const rowsArray = [];
    
        /*цикл, который бежит по каждой строчке вводных данных, 
        превращая каждую строку в ряд - массив чисел, 
        добавляя результат (ряд) в доску (общий массив рядов) */
        for (let i = 2; i < height + 2; i++) {
            let row = Array.from(gameParameters[i]);
            row = row.map((cell) => {
                return cell = parseInt(cell);
            });
            rowsArray.push(row);
        }

        //валидация данных, пришедших из файла, по содержанию
        const parametersValidationMessages = validateParametrs(width, height, rowsArray);
        if (parametersValidationMessages.length === 0) {
            return { rowsArray, width, height };
        }
        else {
            throw new Error(`${ERROR_MESSAGES.VALIDATION_ERR} ${parametersValidationMessages.join(', ')}`)
        }
    }
    else {
        throw new Error(`${ERROR_MESSAGES.VALIDATION_ERR} ${fileValidationMessages.join(', ')}`)
    }
}

const setPath = (path) => {
    filePath = path;
}

//функция, отвечающая за генерацию первоначального состояния доски в режиме "file"
const getParameters = async () => {
    const file = await readFile(filePath);
    return parseFile(file);
}

module.exports = {
    getParameters,
    setPath,
}
