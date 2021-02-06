const { printBoard, clearBoard } = require('./printer');
const { getNextBoard } = require('./nextBoardsGenerator');

const runGame = async (initializer) => {
    //получаем параметры игры - значения клеток, ширину и высоту доски
    let { cellsArray, width, height } = await initializer.getParameters();

    /* каждую секунду: 
        выводим в консоль доску, основываясь на параметрах игры, 
        запрашиваем новые параметры и обновляем их значения, 
        очищаем консоль,
        начинаем сначала  */
    setInterval(() => {
        printBoard(cellsArray, width, height);
        cellsArray = getNextBoard(cellsArray, width, height);
    }, 1000);
};

module.exports = {
    runGame,
}
