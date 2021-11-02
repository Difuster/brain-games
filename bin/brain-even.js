#!/usr/bin/env node
import { rule, getAnswer, getRightAnswer } from '../src/games/even-game.js';
import startGame from '../src/index.js';

startGame(rule, getAnswer, getRightAnswer);
