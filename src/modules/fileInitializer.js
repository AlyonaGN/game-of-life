const { readFile, parseFile } = require('../utils/filesHandler');

//переменная, хранящая путь до файла - её значение устанавливается при получении файла (в app.js)
let filePath;
let file;

const setPath = (path) => {
    filePath = path;
}

//функция, отвечающая за генерацию первоначального состояния доски в режиме "file"
const getParameters = async () => {
    const file = await readFile(filePath);
    console.log(file);
    //вытаскиваем полученные значения из файла
    const width = file[1];
    const height = file[2];
    const cellsArray = Array.from(file.slice(2));
    console.log(width, height, cellsArray);
    
    return { cellsArray, width, height };
}

module.exports = {
    getParameters,
    setPath,
}
