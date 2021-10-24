import readlineSync from 'readline-sync';

const startGame = () => {
  let q = 1;
  let userName = '';
  let result = 0;
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName} !`);
  const evenGame = () => {
    const num = Math.floor(Math.random() * 98) + 1;
    let rightAnswer;
    if (num % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const answer = readlineSync.question(`Question: ${num} `);
    console.log(`Your answer: ${answer}`);
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      result += result;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      result = -1;
    }
    if (q === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
    if (q < 3) {
      console.log(`Let's try again, ${userName}!`);
    }
  };

  while (q < 4 && result >= 0) {
    evenGame();
    q += 1;
  }
};

export default startGame;
