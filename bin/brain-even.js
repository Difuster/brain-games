#!/usr/bin/env node
import {
  startGame, rule, question, func,
} from '../src/games/even-game.js';

startGame(rule, question, func);
