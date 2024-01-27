import Player from "../Player/Player";
import TicTacToeBoard from "../TicTacToeBoard/TicTacToeBoard";
import gameBoardStyles from "./GameBoard.module.scss";

interface GameBoardProps {
  handleSelectSquare: (row: number, col: number) => void;
  board: string[][];
  activePlayer: string;
  players: { X: string; O: string };
  onPlayerNameChange: (symbol: string, player: string) => void;
}

const GameBoard = ({
  handleSelectSquare,
  board,
  activePlayer,
  players,
  onPlayerNameChange,
}: GameBoardProps) => {
  return (
    <main className={gameBoardStyles.gameBoardContainer}>
      <ol
        className={`${gameBoardStyles.playersListGroup} ${gameBoardStyles.highlightPlayer}`}
      >
        <Player
          name={players.X}
          symbol={"X"}
          isActive={Boolean(activePlayer === "X")}
          onPlayerNameChange={onPlayerNameChange}
        />
        <Player
          name={players.O}
          symbol={"O"}
          isActive={Boolean(activePlayer === "O")}
          onPlayerNameChange={onPlayerNameChange}
        />
      </ol>
      <TicTacToeBoard onSelectSquare={handleSelectSquare} board={board} />
    </main>
  );
};

export default GameBoard;
