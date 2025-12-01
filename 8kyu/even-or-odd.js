// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Solution

function evenOrOdd(number) {
    let solution
    let result = number%2
    if (result === 0) {
        solution = "Even"
    } else {
        solution = "Odd"
    }
    return solution
}

console.log(evenOrOdd(5))
console.log(evenOrOdd(12))

// Another solution

function evenOrOdd_1(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd_1(2))
console.log(evenOrOdd_1(3))