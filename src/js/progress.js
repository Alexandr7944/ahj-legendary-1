/* eslint-disable prettier/prettier */

export default class Progress {
  constructor() {
    this.element = document.querySelector('progress')
  }

  maxValue(n) {
    this.element.max = n;
  }

  changeValue(n) {
    this.element.value = n;
  }
}
