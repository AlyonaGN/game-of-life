const { ERROR_MESSAGES } = require('../utils/consts');

//функция, осуществляющая базовую валидацию файла
const validateFile = (gameParameters) => {
    let fileValidationMessages = [];
    
    //валидатор количества строк в файле - с учётом требуемого формата их должно быть больше 2
    const isLinesAmountSufficient = (gameParameters) => {
        let areLinesSufficient = false;
        if (gameParameters.length > 2) {
            areLinesSufficient = true;
        }
        return areLinesSufficient;
    }

    //валидатор высоты и ширины на предмет того, являются ли они числами
    const areWidthAndHeightNums = (parsedWidth, parsedHeight) => {
        let areWidthAndHeightNumbers = false;
        if (!isNaN(parsedWidth) && !isNaN(parsedHeight)) {
            areWidthAndHeightNumbers = true;
        }
        return areWidthAndHeightNumbers;
    }

    //валидатор рядов доски на равенство высоте
    const isBoardRowsAmountSufficient = (gameParameters) => {
        const height = parseInt(gameParameters[1]);
        const rows = gameParameters.slice(2);
        let areBoardRowsSufficient = false;
        if (height === rows.length) {
            areBoardRowsSufficient = true;
        }
        return areBoardRowsSufficient;
    }

    if (!isLinesAmountSufficient(gameParameters)) {
        fileValidationMessages.push(ERROR_MESSAGES.INSUFFICIENT_LINES);
        return fileValidationMessages;
    }

    if (!areWidthAndHeightNums(parseInt(gameParameters[0]), parseInt(gameParameters[1]))) {
        fileValidationMessages.push(ERROR_MESSAGES.SIZE_PARAMS_NOT_NUMS);
        return fileValidationMessages;
    }
    if (!isBoardRowsAmountSufficient(gameParameters)) {
        fileValidationMessages.push(ERROR_MESSAGES.INAPROPRIATE_ROWS);
    }

    return fileValidationMessages;
}

//функция, осуществляющая базовую валидацию данных, пришедших из файла
const validateParametrs = (width, height, rowsArray) => {
    let paramsValidationMessages = [];

    //валидатор общего массива доски на корректность длины каждого ряда 
    const doRowsHaveAppropriateLength = (rowsArray) => {
        let isAppropriateLength = rowsArray.every((row) => {
            if (row.length === width) {
                return true;
            }  
        });
        return isAppropriateLength;
    }

    //валидатор общего массива доски по составу (состоят ли его ряды только из 0 и 1)
    const areCellsAppropriate = (rowsArray) => {
        let isAppropriate = true;
        rowsArray.forEach((row) => {
           row.forEach((cell) => {
                if (cell !== 0 && cell !== 1) {
                    isAppropriate = false;
                }
                if (!isAppropriate) {
                    return isAppropriate;
                }
            })
        });
        return isAppropriate;
    }

    //валидация массива на правильное количество столбцов и элементов в каждом ряде
    if (!doRowsHaveAppropriateLength(rowsArray)) {
        paramsValidationMessages.push(ERROR_MESSAGES.INAPROPRIATE_ROWS);
    }

    //валидация массива на корректность содержания - состоят ли его ряды только из 0 и 1
    if (!areCellsAppropriate(rowsArray)) {
        paramsValidationMessages.push(ERROR_MESSAGES.INAPPROPRIATE_CELLS);
    }

    return paramsValidationMessages;
}

module.exports = {
    validateParametrs,
    validateFile,
}
