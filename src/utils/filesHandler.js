const fsPromises = require('fs').promises;

//функция-считыватель информации из файла
const readFile = async (filePath) => {
  try {
    const data = await fsPromises.readFile(filePath, { encoding: 'utf8' });
    return data;
  } catch (error) {
    throw new Error("Can't read file")
  }
    
}

module.exports = {
    readFile,
}
