import getRandomNum from '../randomNum.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i < num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(0, 100);
  const question = num;
  const isPrimeNum = isPrime(num);
  const correctAnswer = isPrimeNum ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
