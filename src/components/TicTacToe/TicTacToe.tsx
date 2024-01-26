import { useState } from "react";

import GameBoard from "../GameBoard/GameBoard";
import GameLog from "../GameLog/GameLog";
import Header from "../Header/Header";
import ticTacToeStyles from "./TicTacToe.module.scss";
import { WINNING_COMBINATIONS } from "../../constants/constants";

interface gameTurns {
  square: { row: number; col: number };
  player: string;
}

const initialBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

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

  const gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol === "X" || firstSquareSymbol === "O") {
      if (
        firstSquareSymbol === secondSquareSymbol &&
        secondSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol;
      }
    }
  }

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
      <p>You won {winner}</p>
      <GameBoard
        handleSelectSquare={handleSelectSquare}
        activePlayer={activePlayer}
        board={gameBoard}
      />
      <GameLog turns={gameTurns} />
    </section>
  );
};

export default TicTacToe;
