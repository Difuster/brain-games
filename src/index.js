import readlineSync from 'readline-sync';

/* get user name */
const getName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

/* greet user */
const greeting = (userName) => {
  console.log(`Hi ${userName} !`);
};

/* rules of game */
const getRules = (rule) => {
  console.log(rule);
};

/* random number */
const getRandomNum = () => {
  const num = Math.floor(Math.random() * 98) + 1;
  return num;
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

/* message Correct */
const msgCorrect = () => {
  console.log('Correct!');
};

/* message wrong answer */
const msgInCorrect = (userAnswer, rightAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
};

/* message WIN */
const win = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

/* message LOSE */
const lose = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

export {
  getName, greeting, getRules, getRandomNum, getQuestion, showUserAnswer,
  msgCorrect, msgInCorrect, win, lose,
};
