let btn=document.querySelector(".btn")
let tasks=document.querySelector(".tasks")

btn.addEventListener("click",(addEventListener) => {
  let newtask=prompt("enter new task")
  let list=document.createElement("li")
  list.textContent="task "+ (tasks.children.length+1)+" is " + newtask
    tasks.append(list)
}
)