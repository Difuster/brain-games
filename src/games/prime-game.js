import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/* isPrime */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(99) + 1;
  const question = num;
  const isPrimeNum = isPrime(num);
  const correctAnswer = isPrimeNum ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
