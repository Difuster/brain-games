/* random number */
const getRandomNum = (min = 0, max = 100) => {
  return Math.random() * (max - min) + min;
};

export default getRandomNum;
