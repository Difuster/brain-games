import {
  getName, greeting, getRules, getRandomNum, getQuestion, showUserAnswer,
  msgCorrect, msgInCorrect, win, lose,
} from '../index.js';

/* array with operand */
const operandArr = ['+', '-', '*'];

/* rules */
const rule = 'What is the result of the expression?';

/* get right answer */
const getRightAnswer = (num1, num2, operand) => {
  let answer = '';
  if (operand === '+') {
    answer = num1 + num2;
  } else if (operand === '-') {
    answer = num1 - num2;
  } else if (operand === '*') {
    answer = num1 * num2;
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
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const operand = operandArr[Math.floor(Math.random() * 3)];
    const rightAnswer = getRightAnswer(num1, num2, operand);
    const userAnswer = +(getQuestion(`Question: ${num1} ${operand} ${num2} `));
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
