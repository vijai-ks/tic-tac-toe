import headerStyles from "./Header.module.scss";
import gameLogo from "../../assets/game-logo.png";

const Header = () => {
  return (
    <section className={headerStyles.headerSection}>
      <img
        src={gameLogo}
        alt="Tic Tac toe game logo"
        className={headerStyles.gameLogo}
      />
      <header className={headerStyles.heading}>Tic-Tac-Toe</header>
    </section>
  );
};

export default Header;
