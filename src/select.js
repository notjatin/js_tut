import { crossover, getRandomWordObj } from "./utils.js";

export const select = (population, target, alphabet) => {
  // sorts the population in the reverse order of their fitness
  const sortedPopulation = population
    .slice()
    .sort((item1, item2) => item1.fitness - item2.fitness);

  const newPopulation = new Array(population.length);
  for (let i = 0; i < population.length; i++) {
    if (i < 50) {
      let item = {};
      item = crossover(population[i], population[50 + i], target);
      newPopulation.push(item);
    } else if (i < 75) {
      newPopulation.push(getRandomWordObj(alphabet, target));
    } else {
      newPopulation.push(sortedPopulation[i]);
    }
  }
  console.log(newPopulation);
  return newPopulation;
};
