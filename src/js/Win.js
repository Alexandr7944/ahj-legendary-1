/* eslint-disable prettier/prettier */

class Win {
  constructor(element) {
    this.element = element;
    this.winCount();
  }

  winCount() {
    this.element.addEventListener("click", (e) => {
      if (e.target.classList.value.includes("goblin")) {
        const goblin = document.querySelector(".count");
        goblin.textContent = +goblin.textContent + 1;
      }
    });
  }
}

export default Win;
