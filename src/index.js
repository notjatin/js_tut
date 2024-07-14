import { populate } from "./populate.js"
import { select } from "./select.js"
import { logPopulation } from "./utils.js"
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

const ALPHABET = "ABCDEFGHIJKLMNOPQUSTUVWXYZ "
const TARGET = "JATIN PANT"
let population = []

/**
 * Looping over 10 generations
 */
let gen = 0
populate(population, 100, ALPHABET, TARGET)
logPopulation(population);
select(population, TARGET, ALPHABET)
