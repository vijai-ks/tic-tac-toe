import gameLogStyles from "./GameLog.module.scss";

interface GameLogProps {
  turns: { square: { row: number; col: number }; player: string }[] | [];
}

const GameLog = ({ turns }: GameLogProps) => {
  return (
    <ol className={gameLogStyles.gameLog}>
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className={gameLogStyles.list}
        >
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default GameLog;
