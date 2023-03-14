/* eslint-disable prettier/prettier */

export default class CounterWin{
  constructor(progress) {
    this._count = 5;
    this.progress = progress;
  }

  gameCount() {
    document.querySelector(".count").textContent = this._count;
    this.progress.changeValue(this._count);
  }

  increment() {
    this._count++;
    this.gameCount();
  }

  decrement() {
    this._count--;
    this.gameCount();
  }

  reset() {
    this._count = 5;
    this.gameCount();
  }

  control() {
    return this._count > 0;
  }
}