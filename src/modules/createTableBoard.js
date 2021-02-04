const Table = require ('cli-table');
const colors = require('colors');
const { ALIVE_CELL, chars } = require('../../utils/consts');

const createTableBoard = (cellsArray, boardSize) => {
    console.log(cellsArray);
    const copyArray = cellsArray.map(x => x);
    const table = new Table({
        chars
      });
    
    /* создаем таблицу с количеством рядов равным полученной высоте таблицы 
    и количеством клеток в каждом ряду равным заданной ширине  */
    for (let i = 0; i < boardSize.height; i++) {
        table.push(
            copyArray.splice(0, boardSize.width).map((cell) => {
                if (cell === ALIVE_CELL) {
                    return colors.green(cell);
                }
                else {
                    return colors.gray(cell);
                }
            }));
    }           
    return table.toString();
}

module.exports = {
    createTableBoard,
};
