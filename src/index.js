import readlineSync from 'readline-sync';

/* GAME */

const startGame = (rule, func, func2) => {
  // rounds
  let rounds = 3;
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  // rules
  console.log(rule);
  for (let i = 1; i <= rounds; i += 1) {
    // get player answer
    const userAnswer = func;
    console.log(`Your answer: ${userAnswer}`);
    // right answer
    const rightAnswer = func2;
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;