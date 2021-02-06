const { WIDTH_LIMIT, HEIGHT_LIMIT } = require('../utils/consts');

//функция, устанавливающая рандомную длину и высоту доски от 0 до 10
const setRandomBoardSize = () => {
    let width = Math.floor(Math.random() * (WIDTH_LIMIT - 3) + 3);
    let height = Math.floor(Math.random() * (HEIGHT_LIMIT - 3) + 3);
    return { width, height };
}


//функция, отвечающая за генерацию первоначального состояния доски в режиме "random"
const getParameters = () => {
    //рассчитываем рандомную площадь доски и создаем единый массив всех клеток на основе полученных значений
    const boardSize = setRandomBoardSize();
    const { width, height } = boardSize;
    const cellsArray = [];

    //присваиваем клеткам статус - живая или мёртвая случайным образом
    for (let i = 0; i < height; i++) {
        const line = [];
        for (let j = 0; j < width; j++) {
            line.push(Math.floor(Math.random() * 2));
        }
        cellsArray.push(line);
    }
    return { cellsArray, width, height };
}

module.exports = {
    getParameters,
}
