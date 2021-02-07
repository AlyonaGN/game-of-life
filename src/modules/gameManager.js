const { printBoard } = require('./printer');
const { getNextBoard } = require('./nextBoardsGenerator');

const runGame = async (initializer) => {
    //получаем параметры игры - значения клеток, ширину и высоту доски
    let { rowsArray, width, height } = await initializer.getParameters();

    /* каждую секунду: 
        выводим в консоль доску, основываясь на параметрах игры, 
        запрашиваем новые параметры и обновляем их значения, 
        очищаем консоль,
        начинаем сначала  */
    setInterval(() => {
        printBoard(rowsArray, height);
        rowsArray = getNextBoard(rowsArray, width, height);
    }, 1000);
};

module.exports = {
    runGame,
}
