import getRandomNum from '../randomNum.js';

/* array with operand */
const operandArr = ['+', '-', '*'];

/* rule */
const rule = 'What is the result of the expression?';

/* calc */
const calc = (a, b, operand) => {
  let result = '';
  if (operand === '+') {
    result = (a + b);
  } else if (operand === '-') {
    result = (a - b);
  } else if (operand === '*') {
    result = (a * b);
  }
  return result;
};

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNum(100);
  const b = getRandomNum(100);
  const operand = operandArr[getRandomNum(3)];
  const question = `${a} ${operand} ${b}`;
  const correctAnswer = (calc(a, b, operand)).toString();
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
