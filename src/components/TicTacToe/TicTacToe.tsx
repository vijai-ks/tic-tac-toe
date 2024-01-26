import { useState } from "react";

import GameBoard from "../GameBoard/GameBoard";
import GameLog from "../GameLog/GameLog";
import Header from "../Header/Header";
import ticTacToeStyles from "./TicTacToe.module.scss";

interface gameTurns {
  square: { row: number; col: number };
  player: string;
}

const TicTacToe = () => {
  const [gameTurns, setGameTurns] = useState<gameTurns[]>([]);

  const deriveActivePlayer = (gameTurns: gameTurns[]) => {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  };

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

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
