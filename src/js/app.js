/* eslint-disable prettier/prettier */

import Goblin from './Goblin';
import Progress from './progress';
import Counter from './counter';
import GameController from './gameController';

const goblin = new Goblin(document.querySelector('.game'));
const progress = new Progress();
const counter = new Counter(progress);
const gameController = new GameController(goblin, counter);

const stop = document.querySelector('.stop-game');
const start = document.querySelector('.new-game');

stop.addEventListener('click', () => gameController.resetGame());
start.addEventListener('click', () => {
  gameController.resetGame();
  gameController.startGame();
});
