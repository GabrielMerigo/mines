export type Board = {
  row: number;
  column: number;
  opened: boolean;
  flagged: boolean;
  mined: boolean;
}

const createBoard = (rows: number, columns: number) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row, 
        column,
        opened: false,
        flagged: false,
        mined: false
      }
    })
  })
}

const spreadMines = (board: any, minesAmount: number) => {
  const rows: number = board.length;
  const columns: number = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < minesAmount){
    const rowSel = Math.floor(Math.random() * rows);
    const columnSel = Math.floor(Math.random() * columns);

    if(!board[rowSel][columnSel].mined){
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

const createMinedBoard = (rows: number, columns: number, minesAmount: number) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
}

export { createMinedBoard };