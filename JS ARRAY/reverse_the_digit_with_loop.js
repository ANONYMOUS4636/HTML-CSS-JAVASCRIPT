let a=[1,2,3,4]
let sum=0
let b=[]
for(let i=(a.length-1); i>=0; i--){
    b[sum]=a[i]
    sum+=1
}
console.log(b)



// const a = [1, 2, 3, 4, 5];
// for (let i = 0; i < Math.floor(a.length / 2); i++) {
//     let temp = a[i];
//     a[i] = a[a.length - 1 - i];
//     a[a.length - 1 - i] = temp;
// }
// console.log(a);