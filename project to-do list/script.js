let btn_create=document.querySelector(".btn-create")

let btn_terminate=document.querySelector(".btn-terminate")

let ul_list=document.querySelector(".todo-list")

let ul_rem=document.querySelector(".remove-btn")

let list,rem_btn

btn_create.addEventListener("click",(e) => {
     list=document.createElement("li")
    let a=prompt("enter your lists")
    list.innerHTML=a
    ul_list.append(list)
    list.style.listStyleType = "decimal";

     rem_btn=document.createElement("button")
    rem_btn.innerHTML="Mark as read"
    ul_rem.append(rem_btn)
    rem_btn.className="btn-mar"
    rem_btn.style.display="block"
  
}
)

ul_rem.addEventListener("click", (e) => {
  // Check if the thing clicked has class "btn-mar"
  if (e.target.classList.contains("btn-mar")) {
    e.target.innerHTML = "Done";
  }
});


btn_terminate.addEventListener("click", () => {
  ul_list.innerHTML = "";  
  ul_rem.innerHTML = "";  
});