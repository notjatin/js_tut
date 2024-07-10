import { populate } from "./populate.js";
/**
 * @author Jatin-Pant<https://github.com/notjatin>
 * @explanation
 * A program to simply use Genetic Algorithm to arrive at a name.
 * @see https://en.wikipedia.org/wiki/Genetic_algorithm
 */

/**
 * @function populate
 * populate to population
 * @param {number} : population size
 * @param {string} : alphabet sequence
 */

const ALPHABET = "ABCDEFGHIJKLMNOPQUSTUVWXYZ ";

const TARGET = "JATIN PANT";

let population = [];




// let newPopulation = population.slice()
// newPopulation.sort((item1, item2) => item2.fitness - item1.fitness)

/**
 * @function
 * selection
 * @explanation
 * Take the top 10% of the fittest as the same in the new population.
 * Crossover the top 50% with the remaining 50%
 * Take the next 40% of the bottom
 * Mutate
 */

const crossover = (st1, st2) => {
    let len = st1.length
    // if (len !== st2.length) return
    let newStr = ""
    for (let i=0; i<len; i++) {
        if (i<len/2)
            newStr[i] = st1[i]
        else
        newStr[i] = st2[i]
    }
    return newStr
}

const select = () => {
    console.log("select called")
  const sortedPopulation = population
    .slice()
    .sort((item1, item2) => item2 - item1);
  const newPopulation = new Array(population.length);
  for (let i = 0; i < population.length; i++) {
    if (i<50) {
        newPopulation[i] = crossover(population[i], population[50+i])
    } else if (i<60) {
        newPopulation[i] = sortedPopulation[i-50]
    } else {
        newPopulation[i] = sortedPopulation[i]
    }
  }
  population = newPopulation.slice()
};

const printPopulation = (population) => {
    console.log("Printing new population")
    for (let i=0; i<population.length; i++) {
        console.log(`Label: ${population[i].label} Fitness: ${population[i].fitness}`)
    }
}

/**
 * Looping over 10 generations
 */
let gen = 0;
populate(population, 100, ALPHABET, TARGET)
// while (gen < 10) {
//     printPopulation(population)
//     select()
//     gen++
// }