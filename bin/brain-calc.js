#!/usr/bin/env node
import { rule, getQuestionAndCorrectAnswer } from '../src/games/calc-game.js';
import startGame from '../src/index.js';

startGame(rule, getQuestionAndCorrectAnswer);
