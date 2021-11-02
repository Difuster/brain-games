import readlineSync from 'readline-sync';
import getRandomNum from '../randomNum.js';

const num = getRandomNum(100);

/* rules */
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

/* question */
const question = (num) => {
  return `Question: ${num} `;
}

/* get answer */

const getAnswer = (num) => {
  const userAnswer = readlineSync.question(`Question: ${num} `);
  return userAnswer;
}

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

export { rule, getAnswer, getRightAnswer };
