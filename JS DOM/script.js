let a=document.getElementsByClassName("box");
a[2].style.backgroundColor = "red";
document.getElementById("green").style.backgroundColor="green";
document.querySelector("#green").style.color="white";
document.querySelector(".box").style.backgroundColor="brown";//only affects the fist element

console.log(document.querySelectorAll(".box"));//returns node list
//we cant apply the color or background color as we applied in the above query seelector
// to use query selector for all elements we have to use for loop

document.querySelectorAll(".box").forEach(e => {
    console.log(e);
    e.style.color="pink";
});

// Check if an element matches a selector
const element = document.querySelector("#green");

// Returns true if element has id="green"
console.log(element.matches("#green")); // true

// Returns true if element has class="box"
console.log(element.matches(".box")); // true

// Returns false if element doesn't match selector
console.log(element.matches(".some-other-class")); // false

// Can check complex selectors too
console.log(element.matches("#green.box[style]")); // true

//#green - Matches element with id="green"
// .box - Matches element with class="box"
// [style] - Matches element that has a style attribute

//.contains() remains