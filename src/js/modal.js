/* eslint-disable prettier/prettier */
export default class Modal {
  static modalGameOver() {
    const gameOver = document.querySelector(".game-over");
    gameOver.classList.remove("game-over_none");
    setTimeout(() => gameOver.classList.add("game-over_none"), 2000);
  }
}
