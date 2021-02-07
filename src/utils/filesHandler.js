const fsPromises = require('fs').promises;
const { ERROR_MESSAGES } = require('../utils/consts');

//функция-считыватель информации из файла
const readFile = async (filePath) => {
  try {
    const data = await fsPromises.readFile(filePath, { encoding: 'utf8' });
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.READ_FILE_ERR);
  }
    
}

module.exports = {
    readFile,
}
