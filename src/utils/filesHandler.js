const fsPromises = require('fs').promises;

let file;
//функция - считыватель информации из файла
const readFile = async (filePath) => {

await fsPromises.readFile(filePath, { encoding: 'utf8' })
  .then((data) => {
    file = Array.from(data);
  })
  .catch(err => {
    console.log(err);
  });
  return file; 
};

module.exports = {
    readFile,
}
