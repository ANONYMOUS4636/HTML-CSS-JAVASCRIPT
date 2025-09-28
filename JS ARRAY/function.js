let users = [
  { name: "Alice", age: 17, active: false },
  { name: "Bob", age: 25, active: true },
  { name: "Charlie", age: 30, active: false },
  { name: "David", age: 15, active: false }
];

// 1. Check if ANY user is under 18
let hasMinor = users.some(user => user.age < 18);
console.log("Has minor? ->", hasMinor); 
// true (Alice and David are under 18)

// 2. Check if ANY user is active
let hasActive = users.some(user => user.active === true);
console.log("Has active user? ->", hasActive); 
// true (Bob is active)

// 3. Check if ANY user is older than 60
let hasSenior = users.some(user => user.age > 60);
console.log("Has senior? ->", hasSenior); 
// false (no one > 60)

// 4. Combine conditions: check if ANY user is both active AND under 20
let activeTeen = users.some(user => user.active && user.age < 20);
console.log("Has active teen? ->", activeTeen); 
// false (no one matches both conditions)





let langs = ["C", "C++", "Java", "Python"];

// Remove 1 element at index 1
langs.splice(1, 1);
console.log(langs); // ["C", "Java", "Python"]

// Add elements at index 2
langs.splice(2, 0, "JavaScript", "Go");
console.log(langs); 
// ["C", "Java", "JavaScript", "Go", "Python"]

// Replace 1 element at index 0
langs.splice(0, 1, "Rust");
console.log(langs); 
// ["Rust", "Java", "JavaScript", "Go", "Python"]




let numbers = [1, 2, 3, 4];
let squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9, 16]


let a = [4, 9, 16, 25];
let sub = a.map(n=>Math.sqrt(n));
let sub2 = a.map(geeks);

function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub);
console.log(sub2);




const a9 = ["Apple", "Banana", "Cherry"];
const res = a9.values();
//console.log(a);
console.log(res);

for (const value of res) {
    console.log(value);
}