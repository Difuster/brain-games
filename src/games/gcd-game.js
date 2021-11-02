import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Find the greatest common divisor of given numbers.';

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  const question = `${num1} ${num2} `;
  let correctAnswer = 0;
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  correctAnswer = t.toString();
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
