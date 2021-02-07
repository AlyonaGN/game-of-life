//функция-генератор последующих состояний доски
const getNextBoard = (rowsArray, width, height) => {
    let updatedRowsArray = [];

    //функция для подсчёта живых соседей клетки
    const countAliveNeighbours = (rowIndex, columnIndex, { leftColumnIndex, rightColumnIndex, higherRowIndex, lowerRowIndex }) => {
        let aliveNeighbours = 0;

        //проверяем соседей слева и справа от клетки
        if (rowsArray[rowIndex][leftColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (rowsArray[rowIndex][rightColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        //проверяем верхних соседей клетки
        if (rowsArray[higherRowIndex][leftColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (rowsArray[higherRowIndex][columnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (rowsArray[higherRowIndex][rightColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        //проверяем нижних соседей клетки
        if (rowsArray[lowerRowIndex][leftColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (rowsArray[lowerRowIndex][columnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }
        if (rowsArray[lowerRowIndex][rightColumnIndex] === 1) {
            aliveNeighbours = ++aliveNeighbours;
        }

        return aliveNeighbours;
    }

    /* функция, определяющая индексы столбца слева и справа, а также верхнего и нижнего ряда заданной клетки 
    с учётом необходимости "схлапывания" левого и правого, а также верхнего и нижнего краев доски */
    const countSurroundingIndexes = (width, height, rowIndex, heightIndex) => {
        const leftColumnIndex = heightIndex === 0 ? width - 1 : heightIndex - 1;
        const rightColumnIndex = heightIndex === width - 1 ? 0 : heightIndex + 1;
        const higherRowIndex = rowIndex === 0 ? height - 1 : rowIndex - 1;
        const lowerRowIndex = rowIndex === height - 1 ? 0 : rowIndex + 1;

        return { leftColumnIndex, rightColumnIndex, higherRowIndex, lowerRowIndex };
    }

    //бежим по каждому ряду
    for (let i = 0; i < height; i++) {
        const line = [];
        //бежим по каждому столбцу в ряде
        for (let j = 0; j < width; j++) {
            //текущая клетка
            let cell = rowsArray[i][j];

            //получаем индексы левого и правого столбца, а также верхнего и нижнего ряда по отношению к текущей клетке
            const surroundingIndexes = countSurroundingIndexes(width, height, i, j)

            //определяем количество живых соседей
            const aliveCellsAround = countAliveNeighbours(i, j, surroundingIndexes);

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
            //в любом случае добавляем клетку в её ряд
            line.push(cell);
        }
        //добавляем получившийся ряд в доску (массив с рядами)
        updatedRowsArray.push(line);
    }

    // возвращаем обновленный массив, рассчитанный на основе правил игры
    return updatedRowsArray;
}

module.exports = {
    getNextBoard,
};
