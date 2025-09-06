function myf(name) {
    console.log("hello " + name +" brother");
    return name;
}

myf("datta")

function sum(a,b,c=2){
    let add=a+b+c;
    console.log(add);
    return add;

}

let result1=sum(2,3,4);
let result2=sum(2,3);
let result3=sum(2);

console.log("answer is "+ result1);
console.log("answer is "+ result2);
console.log("answer is "+ result3);



// arrow function

let a=(x)=>{
    console.log("i am a arrow function "+x);
}
a(66);
