import getRandomNum from '../randomNum.js';

/* array with operand */
const operandArr = ['+', '-', '*'];

/* rule */
const rule = 'What is the result of the expression?';

/* get right answer */
const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNum(100);
  const b = getRandomNum(100);
  const operand = operandArr[getRandomNum(3)];
  const question = `${a} ${operand} ${b}`;
  let correctAnswer = '';
  if (operand === '+') {
    correctAnswer = (a + b).toString();
  } else if (operand === '-') {
    correctAnswer = (a - b).toString();
  } else if (operand === '*') {
    correctAnswer = (a * b).toString();
  }
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
