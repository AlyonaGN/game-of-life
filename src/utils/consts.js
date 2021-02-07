const BOARD_SIZES = {
    HEIGHT_LIMIT: 11,
    WIDTH_LIMIT: 11,
    HEIGHT_FLOOR: 3,
    WIDTH_FLOOR: 3,
};

const CELLS_STATUSES = {
    DEAD_CELL: 'DEAD',
    ALIVE_CELL: 'ALIVE',
}

const TABLE_BORDERS_DECORATORS = {
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
    , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
    , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
    , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
}

const ERROR_MESSAGES = {
    READ_FILE_ERR: 'Cannot read file. Please, try again.',
    VALIDATION_ERR: 'Invalid input:',
    SIZE_PARAMS_NOT_NUMS: 'Width and height must be numbers',
    INSUFFICIENT_LINES: 'Please check an amount of lines in your file - there must be more than 2 lines',
    INAPPROPRIATE_CELLS: 'Each cell must be either 0 or 1. Please, check your file and try again.',
    INAPROPRIATE_ROWS: 'Rows must be of the same length and their amount must be equal to the height parameter (the second line in a file).',
    UNKNOWN_ERR: 'Some unbelievable error happened. Please try again.',
}

module.exports = {
    BOARD_SIZES,
    CELLS_STATUSES,
    TABLE_BORDERS_DECORATORS,
    ERROR_MESSAGES,
}
