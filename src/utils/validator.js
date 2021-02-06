//функция, осуществляющая базовую валидацию данных, пришедших из файла
const validateParametrs = (width, height, cellsArray) => {
    let validationMessages = [];

    //проверка массива по составу - состоит ли он из массивов, состоящих из 0 и 1
    const doRowsHaveAppropriateLength = (cellsArray) => {
        let isAppropriateLength = cellsArray.every((row) => {
            if (row.length === width) {
                return true;
            }  
        });
        return isAppropriateLength;
    }
    
    //проверка массива на правильное количество элементов
    if (height !== cellsArray.length || !doRowsHaveAppropriateLength(cellsArray)) {
        validationMessages.push('Пожалуйста, измените количество клеток или высоту/ширину доски');
    }

    //проверка массива по составу - состоит ли он из массивов, состоящих из 0 и 1
    const areCellsAppropriate = (cellsArray) => {
        let isAppropriate = false;
        cellsArray.forEach((row) => {
            isAppropriate = row.every((cell) => {
                if (cell === 0 || cell === 1) {
                    return true;
                }
            }) 
        });
        return isAppropriate;
    }

    if (!areCellsAppropriate(cellsArray)) {
        validationMessages.push('Клетки должны быть 0 или 1');
    }
    return validationMessages;
}

module.exports = {
    validateParametrs,
}
