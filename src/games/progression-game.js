import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const num = getRandomNum(10);
  const d = Math.floor(Math.random() * 8) + 2;
  const length = Math.floor(Math.random() * 6) + 5;
  /* get array with nums */
  const getNumsArr = (number, a, lengthOfProgres) => {
    let x = number;
    const arr = [];
    arr.push(number);
    for (let i = 1; i < lengthOfProgres; i += 1) {
      arr.push(x += a);
    }
    return arr;
  };
  /* get string with x */
  const getArithProgres = (x, arr) => {
    const array = arr;
    array[x] = '..';
    const str = arr.join(' ');
    return str;
  };
  /* get right answer */
  const getRightAnswer = (x, arr) => {
    let answer = 0;
    answer = arr[x];
    return answer;
  };
  const numsArr = getNumsArr(num, d, length);
  const x = Math.floor(Math.random() * numsArr.length);
  const correctAnswer = (getRightAnswer(x, numsArr)).toString();
  const question = getArithProgres(x, numsArr);
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
