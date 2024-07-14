import { getRandomWordObj } from "./utils.js";

export const populate = (population, noOfItems, alphabet, target) => {
  for (let i = 0; i < noOfItems; i++) {
    let item = getRandomWordObj(alphabet, target)
    population.push(item);
  }
};
