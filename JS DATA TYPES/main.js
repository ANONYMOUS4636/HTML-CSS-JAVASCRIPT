// Creating a new Date object for the current date and time
let currentDate = new Date();
// Displaying the current date and time
console.log(currentDate);





// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
let result = pattern.test("Hello, world!"); // Returns true because "Hello" matches the pattern
console.log(result);





let s = "hello";
console.log(s.length);  

// Example with a number
let x = 42;
console.log(x.toString()); 

// Example with a boolean
let y = true;
console.log(y.toString());

/* Internal Working of primitives
   to be treeated as objects
   
// Temporary wrapper object
let temp = new String("hello"); 

console.log(temp.length); // 5

// The wrapper is discarded after use
temp = null; */



console.log(typeof NaN); //number
console.log(NaN === NaN);  //false


let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2); //false



let s11 = "gfg";   // String
let s22 = 'g';    // Character

console.log(typeof s11); 
console.log(typeof s22);





function doX(x) {
    if (typeof (x) === "number") {
        console.log("x is a number")
    }
    if (typeof (x) === "string") {
        console.log("x is a string")
    }
    if (typeof (x) === "undefined") {
        console.log("x is undefined")
    }
}

doX(12)
doX("hello gfg")






function checkX(x) {
    if (typeof (x) === "undefined") {
        console.log(
            "x is undefined. Please declare it");
    } else {
        console.log("We can process x!")
    }
}

checkX()
checkX("hello")