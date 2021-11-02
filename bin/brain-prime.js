#!/usr/bin/env node
import { rule, getQuestionAndCorrectAnswer } from '../src/games/prime-game.js';
import startGame from '../src/index.js';

startGame(rule, getQuestionAndCorrectAnswer);
