import getRandomNum from '../randomNum.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(0, 100) + 1;
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
