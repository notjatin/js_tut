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

const populate = (no_of_indices) => {
    for (let i=0; i<no_of_indices; i++) {
        for (let j=0; j<TARGET.length; j++) {
            let item = ""
            let letter = get_random_letter(ALPHABET)
        }
    }
}

const get_fitness = (check, target) => {
    let fitness = 0
    
    for (let i=0; i<check.length; i++) {
        if (check.charAt(i) === target.charAt(i))
            fitness++
    }
    return fitness
}

console.log(get_fitness("AETDSYWHDD", TARGET))
