import winnerBoardStyles from "./WinnerBoard.module.scss";

interface WinnerBoardProps {
  winner: string | undefined;
  handleRestart: () => void;
}

const WinnerBoard = ({ winner, handleRestart }: WinnerBoardProps) => {
  return (
    <div className={winnerBoardStyles.gameOverBoard}>
      <h2 className={winnerBoardStyles.gameOverHeading}>Game Over!</h2>
      {winner ? (
        <p className={winnerBoardStyles.gameOverTexts}>
          Hey!! {winner} You Won! Congratulations
        </p>
      ) : (
        <p className={winnerBoardStyles.gameOverTexts}>It's a draw</p>
      )}
      <p className={winnerBoardStyles.gameOverTexts}>
        <button
          className={winnerBoardStyles.rematchButton}
          onClick={handleRestart}
        >
          Rematch!
        </button>
      </p>
    </div>
  );
};

export default WinnerBoard;
