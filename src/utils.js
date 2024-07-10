export const getRandomLetter = (alphabet) => {
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
};

export const getFitness = (checkString, targetString) => {
  let fitness = 0;

  if (checkString.length !== targetString.length) return;
  for (let i = 0; i < checkString.length; i++) {
    if (checkString[i] === targetString[i]) fitness++;
  }
  return fitness;
};

export const printPopulation = (population) => {
  console.log("Printing new population");
  for (let i = 0; i < population.length; i++) {
    console.log(
      `Label: ${population[i].label} Fitness: ${population[i].fitness}`
    );
  }
};

/**
 * @function
 * selection
 * @explanation
 * Take the top 10% of the fittest as the same in the new population.
 * Crossover the top 50% with the remaining 50%
 * Take the next 40% of the bottom
 * Mutate
 */

export const crossover = (st1, st2) => {
    if (st1.length !== st2.length) return 0
    let len = st1.length;
    // let newStr = "";
    // for (let i = 0; i < len; i++) {
    //     if (i < len / 2)
    //         newStr.concat(st1[i])

    //     else
    //         newStr.concat(st2[i])
    // }
    // return newStr;
    let front = st1.slice(0, len)
    let end = st2.slice(len)
};

