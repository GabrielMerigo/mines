const createBoard = (rows: number, columns: number) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row, 
        column
      }
    })
  })
}