// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This runs immediately!");   
})();



// callback function
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));



// nested function
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen);
console.log(addTen(5));