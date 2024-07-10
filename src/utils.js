export const getRandomLetter = (alphabet) => {
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
};

export const getFitness = (checkString, targetString) => {
  let fitness = 0;

  if (checkString.length !== targetString.length) return
  for (let i = 0; i < checkString.length; i++) {
    if (checkString[i] === targetString[i]) fitness++;
  }
  return fitness;
};
