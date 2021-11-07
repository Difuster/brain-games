import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Find the greatest common divisor of given numbers.';

/* get gcd */
const getGCD = (num1, num2) => {
  let result = '';
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  result = t.toString();
  return result;
};

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  const question = `${num1} ${num2} `;
  const correctAnswer = getGCD(num1, num2);
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
