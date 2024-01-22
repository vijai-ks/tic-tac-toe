import { useState } from "react";

import ticTacToeBoardStyles from "./TicTacToeBoard.module.scss";

interface TicTacToeBoardProps {
  onSelectSquare: () => void;
  activePlayerSymbol: string;
}

const initialBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const TicTacToeBoard = ({
  onSelectSquare,
  activePlayerSymbol,
}: TicTacToeBoardProps) => {
  const [gameBoard, setGameBoard] = useState<string[][]>(initialBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevBoard) => {
      const newGameBoard: string[][] = [
        ...prevBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return newGameBoard;
    });

    onSelectSquare();
  };

  return (
    <ol className={ticTacToeBoardStyles.gameBoard}>
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol className={ticTacToeBoardStyles.gameBoardRow}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={ticTacToeBoardStyles.playerButton}
                  onClick={() => handleSelectSquare(index, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default TicTacToeBoard;
