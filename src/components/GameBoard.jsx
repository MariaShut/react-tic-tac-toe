const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// eslint-disable-next-line react/prop-types
export const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col  } = square;
    
    gameBoard[row][col] = player;
  }

  return (
    <ol className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
      </li>))}
    </ol>
  )
}