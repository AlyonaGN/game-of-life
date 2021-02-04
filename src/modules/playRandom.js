const { setRandomBoardSize } = require('./setRandomBoardSize');
const { createTableBoard } = require('./createTableBoard');
const { displayNewTables } = require('./displayNewTables');
const { DEAD_CELL, ALIVE_CELL } = require('../../utils/consts');

const playRandom = () => {
    //рассчитываем рандомную площадь доски и создаем единый массив всех клеток на основе полученных значений
    const boardSize = setRandomBoardSize();
    const cellsArray = [];
    const boardSquare = boardSize.width * boardSize.height;

    //присваиваем клеткам статус - живая или мёртвая случайным образом
    for (let i = 0; i < boardSquare; i++) {
        cellsArray[i] = Math.floor(Math.random() * 2);
        if (cellsArray[i] === 0) {
            cellsArray[i] = DEAD_CELL;
        }
        else {
            cellsArray[i] = ALIVE_CELL;
        }
    }

    //создаем и выводим в консоль доску в виде таблицы на основе полученного выше массива
    const board = createTableBoard(cellsArray, boardSize, boardSquare);
    console.log(board);

    //генерируем и выводим в консоль новые таблицы, основываясь на заданных правилах
    displayNewTables(cellsArray, boardSize);
}

module.exports = {
    playRandom,
};
