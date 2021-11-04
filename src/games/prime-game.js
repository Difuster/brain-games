import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(99) + 1;
  const question = num;
  let correctAnswer = '';
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
      i += 1;
    }
  }
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
