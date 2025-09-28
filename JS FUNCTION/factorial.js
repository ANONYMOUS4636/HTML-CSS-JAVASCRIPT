let n=5;
let res=1;
for(let i=n; i>=1; i--){
res=res*i;
}
console.log(res);



function fact(a){
    if(a==1 || a==0){
        return 1;
    }
    else{
        return a*fact(a-1)
    }
}

console.log(fact(5))


let prod=1;
while(n>=1){
prod=prod*n;
n--;
}
console.log(prod);

