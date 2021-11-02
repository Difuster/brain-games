#!/usr/bin/env node
import { rule, getQuestionAndCorrectAnswer } from '../src/games/gcd-game.js';
import startGame from '../src/index.js';

startGame(rule, getQuestionAndCorrectAnswer);
