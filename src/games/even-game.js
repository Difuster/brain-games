import { getRandomNum, startGame } from '../index.js';

const number = getRandomNum();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = `Question: ${number} `;
const func = () => {
  let answer = '';
  if (number % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

export {
  startGame, rule, question, func,
};
