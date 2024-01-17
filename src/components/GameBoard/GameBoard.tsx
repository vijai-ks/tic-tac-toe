import Player from "../Player/Player";
import gameBoardStyles from "./GameBoard.module.scss";

const GameBoard = () => {
  return (
    <main className={gameBoardStyles.gameBoardContainer}>
      <ol className={gameBoardStyles.playersListGroup}>
        <Player name={"Player 1"} symbol={"X"} />
        <Player name={"Player 2"} symbol={"O"} />
      </ol>
    </main>
  );
};

export default GameBoard;
