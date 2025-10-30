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


const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )





function sum(a,b){ //function
  return (a+b);
}

function sum1(a,b,sumof){  //callback- means passing a function in another function as argument
  return sumof(a,b);
}


console.log(sum1(2,3,sum)); //call of the function



console.log(sum1(2,3,(a,b) => {
  return (a+b);
}
));  // same with arrow function



//setTimeout is also a require a callback
const a=() => {
  console.log('hello');
  
}

setTimeout(a,1000);

