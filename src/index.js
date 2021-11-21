import readlineSync from 'readline-sync';

const startGame = (rule, getRoundData) => {
  const roundCounter = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} !`);

  console.log(rule);
  for (let i = 1; i <= roundCounter; i += 1) {
    const [questionNum, correctAnswer] = getRoundData();

    const userAnswer = readlineSync.question(`Question: ${questionNum} `);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
