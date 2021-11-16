import getRandomNum from '../randomNum.js';

/* rule */
const rule = 'What number is missing in the progression?';

/* generate progressions */
const generateProgression = (startProgres, progresStep, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startProgres + (progresStep * i));
  }
  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const startProgres = getRandomNum(1, 10);
  const progresStep = getRandomNum(2, 9);
  const progresLength = getRandomNum(5, 10);
  const progression = generateProgression(startProgres, progresStep, progresLength);
  const index = getRandomNum(0, progresLength);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
