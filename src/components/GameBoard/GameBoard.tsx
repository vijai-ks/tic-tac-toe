import Player from "../Player/Player";
import TicTacToeBoard from "../TicTacToeBoard/TicTacToeBoard";
import gameBoardStyles from "./GameBoard.module.scss";

interface GameBoardProps {
  handleSelectSquare: (row: number, col: number) => void;
  turns: { square: { row: number; col: number }; player: string }[] | [];
  activePlayer: string;
}

const GameBoard = ({
  handleSelectSquare,
  turns,
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
      <TicTacToeBoard onSelectSquare={handleSelectSquare} turns={turns} />
    </main>
  );
};

export default GameBoard;
