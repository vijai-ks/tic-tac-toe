import ticTacToeBoardStyles from "./TicTacToeBoard.module.scss";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToeBoard = () => {
  return (
    <ol className={ticTacToeBoardStyles.gameBoard}>
      {initialBoard.map((row, index) => (
        <li key={index}>
          <ol className={ticTacToeBoardStyles.gameBoardRow}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button className={ticTacToeBoardStyles.playerButton}>
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
