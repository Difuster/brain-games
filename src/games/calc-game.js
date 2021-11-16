import getRandomNum from '../randomNum.js';

/* array with operator */
const operators = ['+', '-', '*'];

/* rule */
const rule = 'What is the result of the expression?';

/* calc */
const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = (a + b);
  } else if (operator === '-') {
    result = (a - b);
  } else if (operator === '*') {
    result = (a * b);
  }
  return result;
};

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNum(0, 100);
  const b = getRandomNum(0, 100);
  const operator = operators[getRandomNum(0, operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = (calc(a, b, operator)).toString();
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
