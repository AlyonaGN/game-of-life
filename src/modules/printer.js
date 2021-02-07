const Table = require ('cli-table');
const colors = require('colors');
const { CELLS_STATUSES, TABLE_BORDERS_DECORATORS } = require('../utils/consts');
const { ALIVE_CELL, DEAD_CELL } = CELLS_STATUSES;
const { chars } = TABLE_BORDERS_DECORATORS;

//функция, отвечающая за вывод в консоль доски на основе полученных данных
const printBoard = (rowsArray, height) => {
    //чистим консоль перед каждым новым выводом таблицы
    console.clear();

    const table = new Table({
        chars
    });

    /* создаем таблицу с количеством рядов равным полученной высоте таблицы 
    и количеством клеток в каждом ряду равным заданной ширине  */
    for (let i = 0; i < height; i++) {
        table.push(
            rowsArray[i].map((cell) => {
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
