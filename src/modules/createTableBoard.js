const Table = require ('cli-table');
const colors = require('colors');
const { ALIVE_CELL } = require('../../utils/consts');

const createTableBoard = (boardSize, cellsArray) => {
    const table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
               , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
               , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
               , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
      });
    
    /* создаем таблицу с количеством рядов равным полученной высоте таблицы 
    и количеством клеток в каждом ряду равным заданной ширине  */
    for (let i = 0; i < boardSize.height; i++) {
        table.push(
            cellsArray.splice(0, boardSize.width).map((cell) => {
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
