import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(100);
  const question = num;
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
