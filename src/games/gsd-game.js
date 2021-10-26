import {
  getName, greeting, getRules, getRandomNum, getQuestion, showUserAnswer,
  msgCorrect, msgInCorrect, win, lose,
} from '../index.js';

/* rules */
const rule = 'Find the greatest common divisor of given numbers.';

/* get right answer */
const getRightAnswer = (num1, num2) => {
  let answer = 0;
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  answer = t;
  return answer;
};

/* GAME */

const startGame = () => {
  let result = 0;
  const userName = getName();
  greeting(userName);
  getRules(rule);
  for (let i = 1; i < 4; i += 1) {
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const rightAnswer = getRightAnswer(num1, num2);
    const userAnswer = +(getQuestion(`Question: ${num1} ${num2} `));
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
