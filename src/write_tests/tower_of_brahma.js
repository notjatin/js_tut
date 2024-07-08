/**
 * @author Jatin Pant<https://github.com/notjatin>
 * @explanation
 * Tower of brahma (aka tower of hanoi) is a mathematical ancient 
 * problem featuring 3 rods and n disks where we have to transfer
 * disks from one rod to another using a third spare rod.
 * @see https://en.wikipedia.org/wiki/Tower_of_Hanoi
 */

const steps = []

const tower_of_brahma = (no_of_disks) => {
    const to_rod = "C", from_rod = "A", using_rod = "B"

    if (no_of_disks > 1)
        tower_of_brahma_utility(no_of_disks, from_rod, to_rod, using_rod)
    else if (no_of_disks === 1) 
        steps.push(`Transfer disk from A to C`)
}

const tower_of_brahma_utility = (no_of_disks, from_rod, to_rod, using_rod) => {
    // send all disks except the bottom most to the spare rod
    // send the bottom most disk to the target rod
    // send the disks from spare rod to the target rod
    if (no_of_disks === 1) {
        const msg = `send from ${from_rod} to ${to_rod}`
        steps.push(msg)
        return
    }
    tower_of_brahma_utility(no_of_disks-1, from_rod, using_rod, to_rod)
    tower_of_brahma_utility(1, from_rod, to_rod, using_rod)
    tower_of_brahma_utility(no_of_disks-1, using_rod, to_rod, from_rod);
}