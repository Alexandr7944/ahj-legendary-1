/* eslint-disable prettier/prettier */
import img from '../img/goblin.png';

class Goblin {
  constructor(element) {
    this.element = element;
    this.count = 0;
    this.positiveCount = 0;
    this.position = null;
    this.interval = null;
    this.startGameBtn();
    this.winCount();
  }

  startGameBtn() {
    const start = document.querySelector('.new-game');
    start.onclick = () => {
      this.resetGame();
      this.startGame();
      this.stopGame();
    }
  }

  stopGame() {
    const stop = document.querySelector('.stop-game');
    stop.addEventListener('click', () => this.resetGame())
  }

  startGame() {
    this.addGoblin(this.randomPosition());
    this.interval = setInterval(() => {
      this.removeGoblin();
      this.addGoblin(this.randomPosition())
      console.log(this.count);
    }, 1000);
  }

  addGoblin(num) {
    if ((this.count - this.positiveCount) > 5) {
      clearInterval(this.interval);
      return this.gameOver();
    }

    const newGoblin = document.createElement("img");
    newGoblin.src = img;
    newGoblin.alt = "Goblin";
    newGoblin.classList.add("goblin");
    this.element.querySelectorAll('.game__item')[num]
      .appendChild(newGoblin);
    this.count++;
  }

  removeGoblin() {
    const goblin = this.element.querySelector('.goblin');
    goblin && goblin.remove();
  }
  
  resetGame() {
    this.count = 0;
    this.positiveCount = 0;
    this.position = null;
    this.removeGoblin();
    clearInterval(this.interval);
    document.querySelector(".count").textContent = 0;
  }

  gameOver() {
    const gameOver = document.querySelector('.game-over');
    gameOver.classList.remove('game-over_none');
    setTimeout(() => gameOver.classList.add('game-over_none'), 5000)
  }

  randomPosition() {
    const num = Math.floor(Math.random() * 16);
    if (num === this.position) {
      return this.randomPosition()
    }
    this.position = num;
    return num;
  }

  winCount() {
    this.element.addEventListener("click", (e) => {
      if (e.target.classList.value.includes("goblin")) {
        const goblin = document.querySelector(".count");
        goblin.textContent = +goblin.textContent + 1;
        this.positiveCount = +goblin.textContent;
        this.removeGoblin();
        clearInterval(this.interval);
        this.startGame();
      }
    });
  }
}

export default Goblin;
