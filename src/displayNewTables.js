const { createTableBoard } = require('./createTableBoard');
const { DEAD_CELL, ALIVE_CELL } = require('../../utils/consts');

const displayNewTables = (cellsArray, boardSize, boardSquare) => {
    const width = boardSize.width;

    //функция для проверки того, является ли клетка первой в ряду
    const isFirstInARow = (index) => {
        if (index % width !== 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //функция для проверки того, является ли клетка последней в ряду
    const isLastInARow = (index) => {
        if ((index + 1) % width !== 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //функция для подсчёта живых соседей клетки
    const countAliveNeighbours = (index) => {
        let aliveNeighbours = 0;
            
        //проверяем соседей слева и справа от клетки
        if ((!isFirstInARow(index)) && (cellsArray[index - 1] === ALIVE_CELL)) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if ((!isLastInARow(index)) && (cellsArray[index + 1] === ALIVE_CELL)) {
            aliveNeighbours = ++aliveNeighbours;
        }

        //проверяем верхних соседей клетки
        if (index > (width - 1)) {
            if ((!isFirstInARow(index)) && (cellsArray[index - (width - 1)] === ALIVE_CELL)) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if (cellsArray[index - width] === ALIVE_CELL) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if ((!isLastInARow(index)) && (cellsArray[index - (width + 1)] === ALIVE_CELL)) {
                aliveNeighbours = ++aliveNeighbours;
            }
        }

        //проверяем нижних соседей клетки
        if ((index + width) < boardSquare) {
            if ((!isFirstInARow(index)) && (cellsArray[index + (width - 1)] === ALIVE_CELL)) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if (cellsArray[index + width] === ALIVE_CELL) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if ((!isLastInARow(index)) && (cellsArray[index + (width + 1)] === ALIVE_CELL)) {
                aliveNeighbours = ++aliveNeighbours;
            }
        }
        return aliveNeighbours;
    }

    //присваиваем клеткам статус - живая или мёртвая, основываясь на правилах игры
    for (let i = 0; i < boardSquare; i++) {
        const newArray = cellsArray.map((cell) => {
            //определяем количество живых соседей
            const aliveCellsAround = countAliveNeighbours(i);
            
            //определяем, живая клетка или нет и применяем правила игры
            if (cell === ALIVE_CELL) {
                switch(aliveCellsAround) {
                //убиваем живую клетку, если у неё меньше двух или больше трёх живых соседей
                    case (aliveCellsAround < 2):
                    case (aliveCellsAround > 3):
                        cell = DEAD_CELL;
                        break;
                    default: 
                        break;
                }
            }
            //если клетка мёртвая
            else {
                //и у неё 3 живых соседа, то мы её возрождаем
                if (aliveCellsAround === 3) {
                    cell = ALIVE_CELL;
                }
            }

        });
    }

    //создаем и выводим в консоль доску в виде таблицы на основе полученного выше массива
    const board = createTableBoard(boardSize, newArray);
    console.log(board);
}

module.exports = {
    displayNewTables,
};
