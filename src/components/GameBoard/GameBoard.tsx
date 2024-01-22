import { useState } from "react";

import Player from "../Player/Player";
import TicTacToeBoard from "../TicTacToeBoard/TicTacToeBoard";
import gameBoardStyles from "./GameBoard.module.scss";

const GameBoard = () => {
  const [activePlayer, setActivePlayer] = useState<string>("X");

  const handleSelectSquare = () => {
    setActivePlayer((currentActivePlayer: string) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  };

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
      <TicTacToeBoard
        onSelectSquare={handleSelectSquare}
        activePlayerSymbol={activePlayer}
      />
    </main>
  );
};

export default GameBoard;
