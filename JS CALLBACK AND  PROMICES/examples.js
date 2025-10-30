function getdata(dataId, nextData) {
    setTimeout(() => {
        console.log("data", dataId);
        nextData();

        //     if (nextData) { ... } checks whether nextData is truthy (not undefined, null, false, 0, "", or NaN). In your code it's used to avoid calling a missing callback — but it doesn't guarantee nextData is a function.

        // Safer options:

        // Check the type: if (typeof nextData === 'function') nextData();
        // Use optional chaining (only skips when null/undefined): nextData?.();

        // function getdata(dataId, nextData) {
        //   setTimeout(() => {
        //     console.log("data", dataId);
        //     if (typeof nextData === "function") nextData();
        //   }, 2000);
        // }
    }, 2000);
}

getdata(1, getdata(2)); //Fix by passing a function reference (not calling it) and guard the call:

getdata(1, () => getdata(2));

// Yes — an arrow function is just a shorter syntax for a function expression. It can be used as a callback whenever you pass a function to be called later.

// Key points (short):

// Arrow functions are functions, so they can be callbacks.
// They do not have their own this/arguments, which can matter when used as callbacks.
// Use an arrow to pass a function reference (not call it).

// function sum(a,b){
//   return (a+b);
// }

// console.log(sum("x","y"));

function getdata(dataId, nextData, nextData1) {
    setTimeout(() => {
        console.log("data", dataId);
        if (typeof nextData === "function") nextData();
        if (typeof nextData1 === "function") nextData1();
    }, 2000);
}

getdata(1,() => getdata(2),() => getdata(3));
