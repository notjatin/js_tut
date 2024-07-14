export const getRandomWordObj = (alphabet, target) => {
  let word = { label: "", fitness: 0 };
  let len = target.length;

  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * alphabet.length);
    word.label += alphabet.charAt(index);
  }

  word.fitness = getFitness(word.label, target);
  return word;
};

const getFitness = (checkString, targetString) => {
  let fitness = 0;

  if (checkString.length !== targetString.length) return;
  for (let i = 0; i < checkString.length; i++) {
    if (checkString[i] === targetString[i]) fitness++;
  }
  return fitness;
};

export const logPopulation = (population) => {
  console.log("Printing new population");
  for (let i = 0; i < population.length; i++) {
    console.log(
      `Label: ${population[i].label} Fitness: ${population[i].fitness}`
    );
  }
};

/**
 */

export const crossover = (itemObj1, itemObj2, target) => {
  if (itemObj1.label.length !== itemObj2.label.length) return 0;

  let newItem = {};

  let len = itemObj1.label.length / 2;
  let newLabel = itemObj1.label.slice(0, len).concat(itemObj2.label.slice(len));
  let newFitness = getFitness(newLabel, target);

  newItem.label = newLabel;
  newItem.fitness = newFitness;

  return newItem;
};
