import readlineSync from 'readline-sync';

/* GAME */

const startGame = (rule, func) => {
  // rounds
  const rounds = 3;
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);
  // rules
  console.log(rule);
  for (let i = 1; i <= rounds; i += 1) {
    const roundData = func();
    // get player answer
    const userAnswer = readlineSync.question(`Question: ${roundData[0]} `);
    if (userAnswer === roundData[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundData[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
