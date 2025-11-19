

// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//           resolve(455)
//         }
//         ,5000)
//     })

// }
// async function getData(){
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json)) //using promices

// }
async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    console.log(data);
    
    console.log(x);
    
    return data //using await
      

}  //this whole is a async function that means it will run in the background


async function main(){
    console.log('getting data...');
    let data=await getData()
    console.log(data);
    
    console.log('data fetched');
    
    
}  //this is the main function that will run as it is with await

main()  //main function call
