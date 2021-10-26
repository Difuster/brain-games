import {
  getName, greeting, getRules, getQuestion, showUserAnswer,
  msgCorrect, msgInCorrect, win, lose,
} from '../index.js';

/* rules */
const rule = 'What number is missing in the progression?';

/* get array with nums */
const getNumsArr = (num, d, length) => {
  let x = num;
  const arr = [];
  arr.push(num);
  for (let i = 1; i < length; i += 1) {
    arr.push(x += d);
  }
  return arr;
};

/* get right answer */
const getRightAnswer = (x, arr) => {
  let answer = 0;
  answer = arr[x];
  return answer;
};

/* get string with x */
const getArithProgres = (x, arr) => {
  const array = arr;
  array[x] = '..';
  const str = arr.join(' ');
  return str;
};

/* GAME */

const startGame = () => {
  let result = 0;
  const userName = getName();
  greeting(userName);
  getRules(rule);
  for (let i = 1; i < 4; i += 1) {
    const num = Math.floor(Math.random() * 9) + 1;
    const d = Math.floor(Math.random() * 8) + 2;
    const length = Math.floor(Math.random() * 6) + 5;
    const numsArr = getNumsArr(num, d, length);
    const x = Math.floor(Math.random() * numsArr.length);
    const rightAnswer = getRightAnswer(x, numsArr);
    const question = getArithProgres(x, numsArr);
    const userAnswer = +(getQuestion(`Question: ${question} `));
    showUserAnswer(userAnswer);
    if (userAnswer === rightAnswer) {
      msgCorrect();
      result += 1;
    } else {
      msgInCorrect(userAnswer, rightAnswer);
      break;
    }
  }
  if (result === 3) {
    win(userName);
  } else {
    lose(userName);
  }
};

export default startGame;
