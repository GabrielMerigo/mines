export type Board = {
  row: number;
  column: number;
  opened: boolean;
  flagged: boolean;
  mined: boolean;
  exploded?: boolean;
  nearMines?: number
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

const spreadMines = (board: Board[][], minesAmount: number) => {
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

const cloneBoard = (board: Board[][]) => {
  return board.map(rows => {
    return rows.map(field => {
      return {...field}
    })
  })
}

const getNeighbors = (board: Board[][], row: number, column: number) => {
  const neighbors: any = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column];
  rows.forEach(r => {
    columns.forEach(c => {
      const diferent = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;

      if(diferent && validRow && validColumn){
        neighbors.push(board[r][c]);
      }
    })
  })
  return neighbors;
}

const safeNeighborhood = (board: Board[][], row: number, column: number) => {
  const safes = (result: number, neighbor: any) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
}

const openField = (board: Board[][], row: number, column: number) => {
  const field = board[row][column];
  if(!field.opened){
    field.opened = true
    if(field.mined){
      field.exploded = true;
    }else if(safeNeighborhood(board, row, column)){
      getNeighbors(board, row, column)
        .forEach((n: any) => openField(board, n.row, n.columns));
    }else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter((n: any) => n.mined).length;
    }
  }
}

const fields = (boards: any) => [].concat(...boards);
const hadExplosion = (board: any) => fields(board)
  .filter((field: any) => field.exploded).length > 0
const pendding = (field: Board) => (field.mined && !field.flagged) || (!field.mined && !field.opened)
const wonGame = (board: Board[]) => fields(board).filter(pendding).length === 0;
const showMines = (board: any) => fields(board)
  .filter((field: Board) => field.mined)
  .forEach((field: Board) => field.opened = true)

export { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
};