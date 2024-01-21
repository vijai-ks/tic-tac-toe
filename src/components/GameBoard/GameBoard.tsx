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
      <ol className={gameBoardStyles.playersListGroup}>
        <Player name={"Player 1"} symbol={"X"} />
        <Player name={"Player 2"} symbol={"O"} />
      </ol>
      <TicTacToeBoard
        onSelectSquare={handleSelectSquare}
        activePlayer={activePlayer}
      />
    </main>
  );
};

export default GameBoard;
