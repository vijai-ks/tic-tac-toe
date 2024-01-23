import { useState } from "react";

import GameBoard from "../GameBoard/GameBoard";
import GameLog from "../GameLog/GameLog";
import Header from "../Header/Header";
import ticTacToeStyles from "./TicTacToe.module.scss";

const TicTacToe = () => {
  const [activePlayer, setActivePlayer] = useState<string>("X");
  const [gameTurns, setGameTurns] = useState<
    { square: { row: number; col: number }; player: string }[] | []
  >([]);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedSquares = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedSquares;
    });
  };

  return (
    <section className={ticTacToeStyles.mainContainer}>
      <Header />
      <GameBoard
        handleSelectSquare={handleSelectSquare}
        activePlayer={activePlayer}
        turns={gameTurns}
      />
      <GameLog turns={gameTurns} />
    </section>
  );
};

export default TicTacToe;
