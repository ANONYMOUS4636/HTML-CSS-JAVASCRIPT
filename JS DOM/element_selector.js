let a=document.getElementById("title")
console.log(a.textContent)

let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);
