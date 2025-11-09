let count=document.querySelector(".count")
let btn_add=document.querySelector(".btn-add")
let btn_reset=document.querySelector(".btn-reset")
let a=1;
btn_add.addEventListener("click",(e)=>{
    console.log(e.target)
    count.innerHTML=a
    a+=1
})
btn_reset.addEventListener("click",(e)=>{
    count.innerHTML="0"
    a=0
})

