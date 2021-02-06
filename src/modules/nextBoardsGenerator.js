const getNextBoard = (cellsArray, width, height) => {
    let table = [];

    //функция для подсчёта живых соседей клетки
    const countAliveNeighbours = (rowIndex, columnIndex, leftColumnIndex, rightColumnIndex, higherRowIndex, lowerRowIndex) => {
        let aliveNeighbours = 0;

        //проверяем соседей слева и справа от клетки
        if (cellsArray[rowIndex][leftColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (cellsArray[rowIndex][rightColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        //проверяем верхних соседей клетки
        if (cellsArray[higherRowIndex][leftColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (cellsArray[higherRowIndex][columnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (cellsArray[higherRowIndex][rightColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        //проверяем нижних соседей клетки
        if (cellsArray[lowerRowIndex][leftColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (cellsArray[lowerRowIndex][columnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (cellsArray[lowerRowIndex][rightColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        
        return aliveNeighbours;
    }

    //бежим по каждому ряду
    for (let i = 0; i < height; i++) {
        const line = [];
        //бежим по каждому столбцу в ряде
        for (let j = 0; j < width; j++) {
            //текущая клетка
            let cell = cellsArray[i][j];
            //определяем индекс столбца слева с учётом необходимости "схлапывания" левого и правого края доски
            let leftColumnIndex = j === 0 ? width - 1 : j - 1;
            //определяем индекс столбца справа с учётом необходимости "схлапывания" левого и правого края доски
            let rightColumnIndex = j === width - 1 ? 0 : j + 1;
            //определяем индекс ряда сверху с учётом необходимости "схлапывания" верхнего и нижнего края доски
            let higherRowIndex = i === 0 ? height - 1 : i - 1;
            //определяем индекс ряда снизу с учётом необходимости "схлапывания" верхнего и нижнего края доски
            let lowerRowIndex = i === height - 1 ? 0 : i + 1;

            //определяем количество живых соседей
            const aliveCellsAround = countAliveNeighbours(i, j, leftColumnIndex, rightColumnIndex, higherRowIndex, lowerRowIndex);

            //определяем, живая клетка или нет и применяем правила игры
            //если клетка живая и у неё меньше двух или больше трёх живых соседей, она умирает
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
            line.push(cell);
        }
        table.push(line);
    }

    // возвращаем массив с новыми клетками, рассчитанных на основе правил игры
    return table;
}

module.exports = {
    getNextBoard,
};
