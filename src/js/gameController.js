/* eslint-disable prettier/prettier */

import Modal from "./modal";

export default class GameController{
  constructor(goblin, counter) {
    this.goblin = goblin;
    this.counter = counter;
    this.timerId = null;
    this.win();
  }

  startGame() {
    if (!this.counter.control()) return this.gameOver();
    this.counter.decrement();
    this.goblin.removeGoblin();
    this.goblin.addGoblin();
    return this.timerId = setTimeout(() => this.startGame(), 1000)
  }

  resetGame() {
    clearTimeout(this.timerId);
    this.goblin.removeGoblin();
    this.counter.reset();
  }

  gameOver() {
    this.resetGame();
    Modal.modalGameOver();
  }

  win() {
    document.querySelector('.game').addEventListener("click", (e) => {
      if (!e.target.classList.value.includes("goblin")) return;
      this.counter.increment();
      clearTimeout(this.timerId);
      this.startGame();
    });
  }
}
