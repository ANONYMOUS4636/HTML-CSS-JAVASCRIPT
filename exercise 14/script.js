let rand1=0+(Math.random()*(7-0));
let one=document.querySelector(".one")
let two=document.querySelector(".two")
let three=document.querySelector(".three")
let four=document.querySelector(".four")
let five=document.querySelector(".five")
let six=document.querySelector(".six")
console.log('intializing');
console.log(rand1);

async function delay1(){
    
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i am inside function');
          one.innerHTML="Initializing hacking..."
          resolve();
        }, (rand1*1000))
    })
}

let rand2=0+(Math.random()*(7-0));
console.log(rand2);
    
async function delay2(){
    
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i am inside function');
          two.innerHTML="Reading your files..."
          resolve();
        }, (rand2*1000))
    })
}

let rand3=0+(Math.random()*(7-0));
console.log(rand2);
    
async function delay3(){
    
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i am inside function');
          three.innerHTML="Password files detected..."
          resolve();
        }, (rand3*1000))
    })
}

let rand4=0+(Math.random()*(7-0));
console.log(rand4);
    
async function delay4(){
    
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i am inside function');
          four.innerHTML="sending all password files and personal files to server..."
          resolve();
        }, (rand4*1000))
    })
}

let rand5=0+(Math.random()*(7-0));
console.log(rand5);
    
async function delay5(){
    
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i am inside function');
          five.innerHTML="cleaning up..."
          resolve();
        }, (rand5*1000))
    })
}

let rand6=0+(Math.random()*(7-0));
console.log(rand6);
    
async function delay6(){
    
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i am inside function');
          six.innerHTML="done"
          resolve();
        }, (rand6*1000))
    })
}
    



async function main(){
await delay1();
await delay2();
await delay3();
await delay4();
await delay5();
await delay6();
}

main()