// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
a.push("Node.js");

// Add Element to the beginning
a.unshift("Web Development");

console.log(a);




// Creating an Array and Initializing with Values
let arr = ["HTML", "CSS", "JS"];
console.log("Original Array: " + arr);

// Removes and returns the last element
let lst = arr.pop();
console.log("After Removing the last: " + arr);

// Removes and returns the first element
let fst = arr.shift();
console.log("After Removing the First: " + arr);

// Removes 2 elements starting from index 1
arr.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + arr);





// Creating an Array and Initializing with Values
let a1 = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a1.length = 7;

console.log("After Increasing Length: ", a1);

// Decrease the array length to 2
a1.length = 2;
console.log("After Decreasing Length: ", a1)



const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses))
console.log("Using instanceof method: ", courses instanceof Array)




// Creating an Array and Initializing with Values
let a2 = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(a2.toString());



// Example 1
const a3 = [5]
console.log(a3)

// Example 2
const a4 = new Array(5) 
console.log(a4)