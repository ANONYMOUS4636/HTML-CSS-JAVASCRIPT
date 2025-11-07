let fruits=document.querySelector(".fruits")

addEventListener("click",(e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.tagName);
    console.log(e.target.nodeName);
    //The .nodeName property of the .target allows us to identify a specific node. If our parent element contains more than one child element then we can identify specific elements by using the .nodeName property.





    console.log('you clicked',e.target.textContent);
    
    
    if(e.target.tagName == "LI") console.log('yay');
    
}
)