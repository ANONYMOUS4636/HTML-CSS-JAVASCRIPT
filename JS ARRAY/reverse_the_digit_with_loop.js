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



// const a = [1, 2, 3, 4, 5];
// for (let i = 0; i < Math.floor(a.length / 2); i++) {
//     a[i]=a[i]+a[a.length-1-i]
//   a[a.length-1-i]=a[i]-a[a.length-1-i]
//   a[i]=a[i]-a[a.length-1-i]
// }
// console.log(a);



// const a = [1, 2, 3, 4, 5];
// const reversed = (function reverse(a) {
//     if (a.length === 0) {
//         return [];
//     }
//     return [a.pop()].concat(reverse(a));
// })([...a]);
// console.log(reversed);



// let a = [1, 2, 3, 4, 5];
// let revArr = a.reduce((acc, current) => 
//     [current, ...acc], []);

// console.log(revArr);


// let a = [1, 2, 3, 4, 5];
// let reversed = [...a].reverse();
// console.log(reversed);


// const a = [1, 2, 3, 4, 5];
// const rev = [];
// while (a.length > 0) {
//     rev.push(a.pop());
// }
// console.log(rev);




// let Arr = [50, 60, 20, 10, 40];
// let minVal = Math.min(...Arr);
//  let maxVal = Math.max(...Arr);
// console.log("Min Elem is:" + minVal);
// console.log("Max Elem is:" + maxVal);



// let Arr = [50, 60, 20, 10, 40];
// Arr.sort((a, b) => a - b);
// console.log(Arr)

// let minVal = Arr[0]; 
// Arr.sort((a, b) => b - a);

// let maxVal = Arr[0]; 
 
// console.log("Min Elem is:" + minVal);
// console.log("Max Elem is:" + maxVal);