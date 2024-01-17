import playerStyles from "./Player.module.scss";

interface PlayerProps {
  name: string;
  symbol: string;
}

const Player = ({ name, symbol }: PlayerProps) => {
  return (
    <li className={playerStyles.playerList}>
      <span className={playerStyles.player}>
        <span className={playerStyles.playerName}>{name}</span>
        <span className={playerStyles.playerSymbol}>{symbol}</span>
      </span>
      <button className={playerStyles.playerActionButton}>Edit</button>
    </li>
  );
};

export default Player;
