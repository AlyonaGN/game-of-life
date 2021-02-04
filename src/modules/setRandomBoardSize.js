const { WIDTH_LIMIT, HEIGHT_LIMIT } = require('../../utils/consts');

const setRandomBoardSize = () => {
    //устанавливаем рандомную длину и высоту доски от 0 до 30
    let width = Math.floor(1 + Math.random() * WIDTH_LIMIT);
    let height = Math.floor(1 + Math.random() * HEIGHT_LIMIT);
    return { width, height };
}

module.exports = {
    setRandomBoardSize,
};
