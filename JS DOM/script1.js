console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes)
let cons=document.body.childNodes[1];
console.log(cons);
console.log(cons.firstChild)
console.log(cons.lastChild)
console.log(cons.firstElementChild)
console.log(cons.lastElementChild)
cons.firstElementChild.style.color="red";
console.log(cons.parentNode)
console.log(cons.lastElementChild.parentNode)
console.log(cons.children[3].nextElementSibling)
console.log(cons.children[3].previousElementSibling)
console.log(cons.children[3].previousElementSibling)
console.log(cons.children[3].previousSibling)
console.log(cons.children[3].previousSibling.parentElement)