let btn = document.querySelector(".btn");
let para = document.querySelector(".facts");

let data;
const url = "https://dattebayo-api.onrender.com/clans";

// const getfacts = async () => {
//   console.log("getting data ...");
//   let response = await fetch(url);
//   data = await response.json();
//   para.innerText = data.clans[10].name; // ✅ show the clan name
//   console.log(data);
// };


function getfacts(){fetch(url).then((response) => {
  console.log(response);
  
  return response.json();
}
).then((result)=>{
  console.log(result);
  para.innerText = result.clans[10].name;
})}

btn.addEventListener("click", getfacts);
