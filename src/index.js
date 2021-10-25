import readlineSync from 'readline-sync';

/* get user name */
const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

/* random number */
const getRandomNum = () => {
  const num = Math.floor(Math.random() * 98) + 1;
  return num;
};

/* rules of game */
const getRules = (rule) => {
  console.log(rule);
};

/* show question and get answer */
const getQuestion = (question) => {
  const userAnswer = readlineSync.question(question);
  return userAnswer;
};

/* get answer */
const showUserAnswer = (answer) => {
  console.log(`Your answer: ${answer}`);
};

/* get right answer */
const getRightAnswer = (func) => {
  const rightAnswer = func;
  return rightAnswer;
};

/* message Correct */
const msgCorrect = () => {
  console.log('Correct!');
};

/* message wrong answer */
const msgInCorrect = (userAnswer, rightAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
};

/* GAME */

const startGame = (rule, question, func) => {
  let result = 0;
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hi ${userName} !`);
  getRules(rule);
  for (let i = 1; i < 4; i += 1) {
    const userAnswer = getQuestion(question);
    showUserAnswer(userAnswer);
    const rightAnswer = getRightAnswer(func);
    if (userAnswer === rightAnswer) {
      msgCorrect();
      result += 1;
    } else {
      msgInCorrect(userAnswer, rightAnswer);
      break;
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export { getRandomNum, startGame };
