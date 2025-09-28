
let b=1;
while(b<=100){
    let count=0;
    for(let i=1; i<=b; i++){
        if(b%i==0){
            count+=1
        }
        
    }
    if(count==2){
            console.log(b+" is prime");
        }
    b+=1;

}
