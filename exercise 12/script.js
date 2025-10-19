// let color = ["red", "blue", "violet", "pink", "green"];
// let bg_color = ["red", "blue", "violet", "pink", "green"];

// document.querySelectorAll(".box").forEach((e) => {
//   let rand1 = Math.floor(Math.random() * 5) + 1;
//   e.style.backgroundColor = bg_color[rand1];
//   let rand2 = Math.floor(Math.random() * 5) + 1;
//   e.style.color = color[rand2];
// });


//let a=documen5.querySelector(".container").children

function randcolor(){
    let a=Math.ceil(Math.random()*255)
    let b=Math.ceil(Math.random()*255)
    let c=Math.ceil(Math.random()*255)
    return `rgb(${a},${b},${c})`
}


Array.from(document.getElementsByClassName("box")).forEach((e)=>{
    e.style.backgroundColor=randcolor()
    e.style.color=randcolor()
})