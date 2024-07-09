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

const population = []

const get_random_letter = (str) => {
    let len = TARGET.length
    const rand_no = Math.floor(Math.random() * len)

    return str[rand_no]
}

const populate = (no_of_indices = 20) => {
    for (let i = 0; i < no_of_indices; i++) {
        let item = {}
        let label = ""
        for (let j = 0; j < TARGET.length; j++) {
            let letter = get_random_letter(ALPHABET)
            label += letter
        }
        item.label = label
        item.fitness = get_fitness(label, ALPHABET)
        population.push(item)
    }
}

const get_fitness = (check, target) => {
    let fitness = 0

    for (let i = 0; i < check.length; i++) {
        if (check.charAt(i) === target.charAt(i))
            fitness++
    }
    return fitness
}
populate()
let newPopulation = population.slice()
newPopulation.sort((item1, item2) => item2.fitness - item1.fitness)

/**
 * @function
 * selection
 * @explanation
 * Take the top 10% of the fittest as the same in the new population.
 * Crossover the top 50% with the remaining 50%
 * Take the next 40% of the bottom
 * Mutate
 */

const select = () => {

}