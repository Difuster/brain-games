import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

/* isEven */
const isEven = (num) => num % 2 === 0;

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(99) + 1;
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
