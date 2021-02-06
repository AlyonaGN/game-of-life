const { readFile } = require('../utils/filesHandler');
const { validateParametrs } = require('../utils/validator');

//переменная, хранящая путь до файла - её значение устанавливается при получении файла (в app.js)
let filePath;

//функция, получающая информацию из файла и возвращающая её наружу
const parseFile = (file) => {
      const gameParameters = file.split('\n');
      const width = parseInt(gameParameters[0]);
      const height = parseInt(gameParameters[1]);

      const cellsArray = [];
      /*цикл, который бежит по каждой строчке доски и парсит массив интов из кажой, 
      добавляя результат в общий массив клеток */
      for (let i = 2; i < height + 2; i++) {
        let row = Array.from(gameParameters[i]);
        row = row.map((cell) => {
          return cell = parseInt(cell);
        });
        cellsArray.push(row);
      }
      
      //базовая валидация данных, пришедших из файла
      const validationMessages = validateParametrs(width, height, cellsArray);
      
      if (validationMessages.length === 0) {
        return { cellsArray, width, height };
      } 
      else {
          throw new Error(`Данные некорректны: ${validationMessages.join(', ')}`)
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
