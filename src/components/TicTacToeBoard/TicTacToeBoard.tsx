import ticTacToeBoardStyles from "./TicTacToeBoard.module.scss";

interface TicTacToeBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  board: string[][];
}

const TicTacToeBoard = ({ onSelectSquare, board }: TicTacToeBoardProps) => {
  return (
    <ol className={ticTacToeBoardStyles.gameBoard}>
      {board.map((row, index) => (
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
