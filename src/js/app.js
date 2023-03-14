/* eslint-disable prettier/prettier */

import Goblin from './Goblin';
import Progress from './Progress';
import CounterWin from './CounterWin';
import GameController from './GameController';

const goblin = new Goblin(document.querySelector('.game'));
const progress = new Progress();
const counterWin = new CounterWin(progress);
const gameController = new GameController(goblin, counterWin);

const stop = document.querySelector('.stop-game');
const start = document.querySelector('.new-game');

stop.addEventListener('click', () => gameController.resetGame());
start.addEventListener('click', () => {
  gameController.resetGame();
  gameController.startGame();
});
