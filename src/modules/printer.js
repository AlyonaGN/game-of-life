const Table = require ('cli-table');
const colors = require('colors');
const { ALIVE_CELL, chars, DEAD_CELL } = require('../utils/consts');

//функция, отвечающая за вывод в консоль доски на основе полученных данных
const printBoard = (cellsArray, width, height) => {
    console.clear();
    const table = new Table({
        chars
    });

    /* создаем таблицу с количеством рядов равным полученной высоте таблицы 
    и количеством клеток в каждом ряду равным заданной ширине  */
    for (let i = 0; i < height; i++) {
        table.push(
            cellsArray[i].map((cell) => {
                if (cell === 1) {
                    cell = ALIVE_CELL;
                    return colors.green(cell);
                }
                else {
                    cell = DEAD_CELL;
                    return colors.gray(cell);
                }
            }));
    }
    console.log(table.toString());
}

module.exports = {
    printBoard,
};
