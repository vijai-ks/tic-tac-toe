import { useState } from "react";

import playerStyles from "./Player.module.scss";

interface PlayerProps {
  name: string;
  symbol: string;
}

const Player = ({ name, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(name);
  const handleEditButtonClick = () => {
    setIsEditing((wasEditing) => !wasEditing);
  };

  return (
    <li className={playerStyles.playerList}>
      <span className={playerStyles.player}>
        {isEditing ? (
          <input
            className={playerStyles.playerNameInput}
            type="text"
            value={playerName}
            maxLength={15}
            onChange={(event) => setPlayerName(event.target.value)}
            required
          />
        ) : (
          <span
            className={playerStyles.playerName}
            onClick={handleEditButtonClick}
          >
            {playerName}
          </span>
        )}
        <span className={playerStyles.playerSymbol}>{symbol}</span>
      </span>
      <button
        className={playerStyles.playerActionButton}
        onClick={handleEditButtonClick}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
