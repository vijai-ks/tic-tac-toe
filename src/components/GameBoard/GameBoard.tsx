import Player from "../Player/Player";
import TicTacToeBoard from "../TicTacToeBoard/TicTacToeBoard";
import gameBoardStyles from "./GameBoard.module.scss";

interface GameBoardProps {
  handleSelectSquare: (row: number, col: number) => void;
  board: string[][];
  activePlayer: string;
}

const GameBoard = ({
  handleSelectSquare,
  board,
  activePlayer,
}: GameBoardProps) => {
  return (
    <main className={gameBoardStyles.gameBoardContainer}>
      <ol
        className={`${gameBoardStyles.playersListGroup} ${gameBoardStyles.highlightPlayer}`}
      >
        <Player
          name={"Player 1"}
          symbol={"X"}
          isActive={Boolean(activePlayer === "X")}
        />
        <Player
          name={"Player 2"}
          symbol={"O"}
          isActive={Boolean(activePlayer === "O")}
        />
      </ol>
      <TicTacToeBoard onSelectSquare={handleSelectSquare} board={board} />
    </main>
  );
};

export default GameBoard;
