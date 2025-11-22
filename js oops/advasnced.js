let [x, y, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(x, y, rest);

let obj = {
  a: 1,
  b: 2,
};

let {a,b}=obj;
console.log(a,b);


function sum(a,b,c){
    return a+b+c;
}

let arr = [1,2,3]
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));//...arr means the array ko khol do aur uske values ko spead karddo

let arr1=[4,7,11]
let obj1={...arr1}
console.log(obj1);



