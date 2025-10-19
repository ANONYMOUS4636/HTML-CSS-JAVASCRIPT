let a = document.querySelector(".box");
console.log(a);

console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);

document.querySelector(".container").outerHTML;
document.querySelector(".container").textContent;
document.querySelector(".container").tagName;
document.querySelector(".container").outerHTML;
console.log(document.querySelector(".container").hidden);
// document.querySelector(".container").hidden=true
document.querySelector(".box").hidden = true;
document.querySelector(".box").innerHTML = "hey there";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(
  document.querySelector(".box").setAttribute("style", "display:inline")
);
console.log(document.querySelector(".box").attributes);
// console.log(document.querySelector(".box").removeAttribute("style"))

console.log(document.querySelector(".box").dataset);

//insert keyword to insert an element
