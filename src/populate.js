import { getRandomLetter, getFitness } from "./utils.js";

export const populate = (population, noOfItems, alphabet, target) => {
  let ofLength = target.length;
  console.log("Populate called");
  for (let i = 0; i < noOfItems; i++) {
    let item = {};
    let label = "";
    for (let j = 0; j < ofLength; j++) {
      let letter = getRandomLetter(alphabet);
      label += letter;
    }
    item.label = label;
    item.fitness = getFitness(label, target);
    population.push(item);
  }
};
