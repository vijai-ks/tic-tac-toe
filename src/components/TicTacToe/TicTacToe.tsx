import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import GameBoard from "../GameBoard/GameBoard";
import GameLog from "../GameLog/GameLog";
import Header from "../Header/Header";
import ticTacToeStyles from "./TicTacToe.module.scss";
import {
  WINNING_COMBINATIONS,
  INITIAL_BOARD,
  PLAYERS,
} from "../../constants/constants";
import WinnerBoard from "../WinnerBoard/WinnerBoard";

interface gameTurns {
  square: { row: number; col: number };
  player: string;
}

const TicTacToe = () => {
  const { width, height } = useWindowSize();
  const [gameTurns, setGameTurns] = useState<gameTurns[]>([]);
  const [players, setPlayers] = useState<{ X: string; O: string }>(PLAYERS);

  const deriveActivePlayer = (gameTurns: gameTurns[]) => {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  };

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = [...INITIAL_BOARD.map((array) => [...array])];

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
        winner = players[firstSquareSymbol];
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

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol: string, playerName: string) => {
    setPlayers((players) => {
      return {
        ...players,
        [symbol]: playerName,
      };
    });
  };

  return (
    <section className={ticTacToeStyles.mainContainer}>
      <Header />
      {winner || hasDraw ? (
        <WinnerBoard winner={winner} handleRestart={handleRestart} />
      ) : (
        <>
          <GameBoard
            handleSelectSquare={handleSelectSquare}
            activePlayer={activePlayer}
            board={gameBoard}
            players={players}
            onPlayerNameChange={handlePlayerNameChange}
          />
          <GameLog turns={gameTurns} players={players} />
        </>
      )}
      {winner && <Confetti width={width} height={height-50} />}
    </section>
  );
};

export default TicTacToe;
