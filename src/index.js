/**
 * @author Jatin Pant<https://github.com/notjatin>
 * @explanation
 * This is the sample index file.
 * @see https://en.wikipedia.org/wiki/Tower_of_Hanoi
 */
const steps = []

const tower_of_brahma = (no_of_disks) => {
    const target_rod = "C", source_rod = "A", spare_rod = "B"

    if (no_of_disks > 1)
        tower_of_brahma_utility(no_of_disks, source_rod, target_rod, spare_rod)
    else if (no_of_disks === 1) 
        steps.push(`Transfer disk from A to C`)
}

const tower_of_brahma_utility = (no_of_disks, source_rod, target_rod, spare_rod) => {
    // send all disks except the bottom most to the spare node
    // send the bottom most disk to the target node
    if (no_of_disks === 1) {
        const msg = `send from ${source_rod} to ${target_rod}`
        steps.push(msg)
        return
    }
        tower_of_brahma_utility(no_of_disks-1, source_rod, spare_rod, target_rod)
    tower_of_brahma_utility(1, source_rod, target_rod, spare_rod)
}

const create_stack = (size) => {

}
tower_of_brahma(3)

/**
 * @expected_output
 * a to c -->
 * a to b -->
 * c to b
 * a to c
 * b to a
 * b to c
 * a to c -->
 */
console.log(steps)