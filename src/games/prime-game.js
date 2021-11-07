import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/* isPrime */
const isPrime = (num) => {
  let result = '';
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
      i += 1;
    }
  }
  return result;
};

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(99) + 1;
  const question = num;
  const correctAnswer = isPrime(num);
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
