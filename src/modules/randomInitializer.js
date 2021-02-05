const { WIDTH_LIMIT, HEIGHT_LIMIT } = require('../utils/consts');

//функция, устанавливающая рандомную длину и высоту доски от 0 до 10
const setRandomBoardSize = () => {
    let width = Math.floor(1 + Math.random() * WIDTH_LIMIT);
    let height = Math.floor(1 + Math.random() * HEIGHT_LIMIT);
    return { width, height };
}


//функция, отвечающая за генерацию первоначального состояния доски в режиме "random"
const getParameters = () => {
    //рассчитываем рандомную площадь доски и создаем единый массив всех клеток на основе полученных значений
    const boardSize = setRandomBoardSize();
    const { width, height } = boardSize;
    const cellsArray = [];
    const boardSquare = width * height;

    //присваиваем клеткам статус - живая или мёртвая случайным образом
    for (let i = 0; i < boardSquare; i++) {
        cellsArray[i] = Math.floor(Math.random() * 2);
    }
    return { cellsArray, width, height };
}

module.exports = {
    getParameters,
}
