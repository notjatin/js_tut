import { printPopulation, crossover } from "./utils.js";

export const select = (population) => {
  const sortedPopulation = population
    .slice()
    .sort((item1, item2) => item1.fitness - item2.fitness);

  const newPopulation = new Array(population.length);
  for (let i = 0; i < population.length; i++) {
    if (i < 50) {
      newPopulation[i].label = crossover(population[i].label, population[50 + i].label);
    } else if (i < 90) {
      newPopulation[i] = population[i];
    } else {
      newPopulation[i] = sortedPopulation[i];
    }
  }
  printPopulation(newPopulation)
};
