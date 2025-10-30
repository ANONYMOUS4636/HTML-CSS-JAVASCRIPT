async function hello() {
    console.log('hello world');
    
}


function weather(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("weather");
        resolve(200)
    },3000)
    })
}

async function getweather(){
    await weather()
    await weather()
    
}


function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',data);
            resolve("success")
            
        },3000)
    })
}

// async function alldata(){
//     console.log('getting data 1');
    
//     await getdata(1)
//     console.log('getting data 2');
//     await getdata(2)
//     console.log('getting data 3');
//     await getdata(3)
// }

// alldata() //unnecessary function call

//to avoid this

(async () => {
  console.log('getting data 1');
    
    await getdata(1)
    console.log('getting data 2');
    await getdata(2)
    console.log('getting data 3');
    await getdata(3)
}
)()