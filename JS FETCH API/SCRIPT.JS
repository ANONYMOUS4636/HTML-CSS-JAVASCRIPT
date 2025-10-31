
let btn=document.querySelector(".btn");
let para=document.querySelector(".facts");


let data;

const url="https://dattebayo-api.onrender.com/clans"
const getfacts=async()=>{
    console.log('getting data ...');
    let response=await fetch(url)
    console.log(response);
     data = await response.json()  // Fixed: Remove 'async' keyword before response.json()
// console.log(data[3]);
      para.innerHTML=data.clans[3].name;
console.log(data);

    
}



// getfacts().then(() => {
//   console.log(data.clans[3]);
// });



//json is a async function and it returns promise






