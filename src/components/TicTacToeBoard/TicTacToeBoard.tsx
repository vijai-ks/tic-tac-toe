import ticTacToeBoardStyles from "./TicTacToeBoard.module.scss";

interface TicTacToeBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  turns: { square: { row: number; col: number }; player: string }[];
}

const initialBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const TicTacToeBoard = ({ onSelectSquare, turns }: TicTacToeBoardProps) => {
  const gameBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol className={ticTacToeBoardStyles.gameBoard}>
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol className={ticTacToeBoardStyles.gameBoardRow}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={ticTacToeBoardStyles.playerButton}
                  onClick={() => onSelectSquare(index, colIndex)}
                  disabled={playerSymbol !== ""}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default TicTacToeBoard;
