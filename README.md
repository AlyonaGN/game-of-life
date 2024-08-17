## CLI Application: "Life"

To start the game, you need to download the repository and run the command `npm install`.

### Game Modes

The game can be launched in two modes:

- **Random Mode**: To start the game in this mode, enter the command:

  ```bash
  node app.js random
  ```

  In this case, the initial state of the board, as well as its length and width, are generated randomly.
  
  For proper display of the game in "random" mode on small screens/terminal windows and to comply with the game rules, there are constraints on the maximum and minimum board size:
  
  Maximum board size: 10x10 cells (100 cells in total).
  Minimum board size: 3x3 cells (9 cells in total).
  If necessary, you can modify these constraints by setting the desired values in the consts.js file located at ./utils/consts.js.

- **File Mode**: To start the game in this mode, enter the command:
  ```bash
  node app.js file --path <filepath>
  ```

  You can use example files from the exampleFiles folder, such as:
  ```bash
  node app.js file --path exampleFiles/bacteria.txt
  node app.js file --path exampleFiles/cross.txt
  ```

  In this mode, the initial state of the board, as well as its length and width, are read from the specified file. The file should contain information in the following format:
  ```
  4
  4
  0000
  0110
  0110
  0000
  ```
  
  The first line represents the board's width.
  The second line represents the height.
  The subsequent lines represent the rows of cells.
  The state (value) of the cells can be either 0 (dead cell) or 1 (live cell).
  
  The number of cells in each row (characters in the third and subsequent lines) must match the width specified in the first line of the file.
  The number of rows with cells must match the height specified in the second line.
  If the data in the file does not adhere to these rules and format, a validation error will occur.

### Game Rules
The game follows these rules:

1. The board, of a size determined either randomly or from the file, is displayed in the console.
2. Each cell can be in one of two states: live or dead.
3. Each cell interacts with its eight neighbors.
   
Every second, the console outputs a new state of the board, which is determined by the following rules based on the previous state:

1. A live cell with fewer than two live neighbors dies.
2. A live cell with two or three live neighbors survives.
3. A live cell with more than three live neighbors dies.
4. A dead cell with exactly three live neighbors becomes alive.
