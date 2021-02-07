const { BOARD_SIZES } = require('../utils/consts');
const { WIDTH_FLOOR, WIDTH_LIMIT, HEIGHT_FLOOR, HEIGHT_LIMIT } = BOARD_SIZES;

//функция, устанавливающая рандомную длину и высоту доски от 3 до 10
const setRandomBoardSize = () => {
    let width = Math.floor(Math.random() * (WIDTH_LIMIT - WIDTH_FLOOR) + WIDTH_FLOOR);
    let height = Math.floor(Math.random() * (HEIGHT_LIMIT - HEIGHT_FLOOR) + HEIGHT_FLOOR);

    return { width, height };
}


//функция, отвечающая за генерацию первоначального состояния доски в режиме "random"
const getParameters = () => {
    //рассчитываем рандомную площадь доски и создаем единый двумерный массив рядов доски, состоящих из массива клеток
    const boardSize = setRandomBoardSize();
    const { width, height } = boardSize;
    const rowsArray = [];

    //присваиваем клеткам статус - живая или мёртвая случайным образом
    for (let i = 0; i < height; i++) {
        const line = [];
        for (let j = 0; j < width; j++) {
            line.push(Math.floor(Math.random() * 2));
        }
        rowsArray.push(line);
    }

    return { rowsArray, width, height };
}

module.exports = {
    getParameters,
}
