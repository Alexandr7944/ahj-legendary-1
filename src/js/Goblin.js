/* eslint-disable prettier/prettier */
import img from "../img/goblin.png";

export default class Goblin {
  constructor(element) {
    this.element = element;
    this.position = null;
  }
  addGoblin() {
    const newGoblin = document.createElement("img");
    newGoblin.src = img;
    newGoblin.alt = "Goblin";
    newGoblin.classList.add("goblin");
    const num = this.randomPosition();
    this.element.querySelectorAll(".game__item")[num].appendChild(newGoblin);
  }

  randomPosition() {
    const num = Math.floor(Math.random() * 16);
    if (num === this.position) {
      return this.randomPosition()
    }
    this.position = num;
    return num;
  }

  removeGoblin() {
    const el = this.element.querySelector('.goblin');
    el && el.remove();
  }
}
