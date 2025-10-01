/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


let a = prompt("enter first number")
let b = prompt("enter second number")
let c = prompt("enter operation number")
let random = Math.random()
alert(random)




if(random<0.1){
    if(c=='+'){
        alert(`${a} ${c} ${b} is  `+(a-b))
    }
    else if(c=='*'){
        alert(`${a} ${c} ${b} is  `+(a+b))
    }
    else if(c=='-'){
        alert(`${a} ${c} ${b} is  `+(a/b))
    }
    else if(c=='/'){
        alert(`${a} ${c} ${b} is  `+(a**b))
    }
}
else{
    if(c=='+'){
        alert(`${a} ${c} ${b} is  `+(a+b))
    }
    else if(c=='*'){
        alert(`${a} ${c} ${b} is  `+(a*b))
    }
    else if(c=='-'){
        alert(`${a} ${c} ${b} is  `+(a-b))
    }
    else if(c=='/'){
        alert(`${a} ${c} ${b} is  `+(a/b))
    }
}