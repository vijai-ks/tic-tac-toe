import GameBoard from "../GameBoard/GameBoard";
import Header from "../Header/Header";
import ticTacToeStyles from "./TicTacToe.module.scss";

const TicTacToe = () => {
  return (
    <section className={ticTacToeStyles.mainContainer}>
      <Header />
      <GameBoard />
    </section>
  );
};

export default TicTacToe;
