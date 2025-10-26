console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 3000);//setTimeout()is a asyncronous function

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);//even if the timer is set to 0, it will execute at the end

function sayHello() {
  console.log("Hi Dattatraya!");
}

setTimeout(sayHello, 3000);


console.log("The End")


//callbackk function
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the function we passed
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Dattatraya", sayBye);


