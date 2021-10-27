import {
  getName, greeting, getRules, getRandomNum, getQuestion, showUserAnswer,
  msgCorrect, msgInCorrect, win, lose,
} from '../index.js';

/* rules */
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

/* get right answer */
const getRightAnswer = (num) => {
  let answer = '';
  if (num % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

/* GAME */

const startGame = () => {
  let result = 0;
  const userName = getName();
  greeting(userName);
  getRules(rule);
  for (let i = 1; i < 4; i += 1) {
    const num = getRandomNum();
    const rightAnswer = getRightAnswer(num);
    const userAnswer = getQuestion(`Question: ${num} `);
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
