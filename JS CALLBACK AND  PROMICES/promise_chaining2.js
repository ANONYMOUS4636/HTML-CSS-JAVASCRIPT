function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',data);
            resolve("success")
            
        },3000)
    })
}


console.log('fetching data 1 ...');

getdata(1).then((res)=>{
    console.log('fetching data 2 ...');
    return getdata(2);
}).then((res)=>{
    console.log('fetching data 3 ...');
    return getdata(3)
    
}).then((res) => {
  console.log(res);
  
}) //.then() always waits if you return a Promise from inside it.

//.then() always returns a new Promise.

// Inside .then() you return...	What happens
// a normal value	The next .then() gets that value immediately.
// another Promise	The next .then() waits for that Promise to finish before continuing.




// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then((res)=>{
//         console.log(res);
        
//     })
// })