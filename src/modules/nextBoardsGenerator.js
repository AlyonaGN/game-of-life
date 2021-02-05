const getNextBoard = (cellsArray, width, height) => {
    const boardSquare = width * height;
    let cells = [];
    //функция для проверки того, является ли клетка первой в ряду
    const isFirstInARow = (index) => {
        if (index % width === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //функция для проверки того, является ли клетка последней в ряду
    const isLastInARow = (index) => {
        if ((index + 1) % width === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //функция для подсчёта живых соседей клетки
    const countAliveNeighbours = (index) => {
        let aliveNeighbours = 0;

        //проверяем, не расположена ли клетка скраю доски, чтобы избежать обращения по несуществующим индексам
        const notFirstInARow = !isFirstInARow(index);
        const notLastInARow = !isLastInARow(index);

        //проверяем соседей слева и справа от клетки
        if (notFirstInARow && cellsArray[index - 1] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (notLastInARow && cellsArray[index + 1] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        //проверяем верхних соседей клетки
        if (index - width >= 0) {
            if (notFirstInARow && cellsArray[index - (width - 1)] === 1) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if (cellsArray[index - width] === 1) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if (notLastInARow && cellsArray[index - (width + 1)] === 1) {
                aliveNeighbours = ++aliveNeighbours;
            }
        }
        //проверяем нижних соседей клетки
        if (index + width < boardSquare) {
            if (notFirstInARow && cellsArray[index + (width - 1)] === 1) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if (cellsArray[index + width] === 1) {
                aliveNeighbours = ++aliveNeighbours;
            }
            if (notLastInARow && cellsArray[index + (width + 1)] === 1) {
                aliveNeighbours = ++aliveNeighbours;
            }
        }
        return aliveNeighbours;
    }

    //присваиваем клеткам статус - живая или мёртвая, основываясь на правилах игры
    cells = cellsArray.map((cell, i) => {
        //определяем количество живых соседей
        const aliveCellsAround = countAliveNeighbours(i);
        //определяем, живая клетка или нет и применяем правила игры
        if (cell === 1) {
            if (aliveCellsAround < 2 || aliveCellsAround > 3) {
                cell = 0;
            }
        }
        //если клетка мёртвая
        else {
            //и у неё 3 живых соседа, то мы её возрождаем
            if (aliveCellsAround === 3) {
                cell = 1;
            }
        }
        //возвращаем клетку для добавления в новый массив
        return cell;
    });

    // возвращаем массив с новыми клетками, рассчитанных на основе правил игры
    return cells;
}

module.exports = {
    getNextBoard,
};
