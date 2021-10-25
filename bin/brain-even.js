#!/usr/bin/env node
import {
  startGame, rule, question, rightAnswer,
} from '../src/games/even-game.js';

startGame(rule, question, rightAnswer);
