// Prompt the user to enter a number
let N = parseInt(prompt("Enter a number N to calculate the sum of first N natural numbers:"));

if (isNaN(N) || N <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log("Sum of the first", N, "natural numbers is:", sum);
}