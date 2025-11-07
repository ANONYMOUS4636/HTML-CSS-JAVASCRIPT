function add(){
    const customUI = document.createElement('ul');

for (let i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', () => {
        console.log('Responding')
    })
    customUI.appendChild(newElement);
}

document.body.appendChild(customUI)}

// add()


// const customUI = document.createElement('ul');

// for (let i = 1; i <= 10; i++) {
//     const newElement = document.createElement('li');
//     newElement.textContent = "This is line " + i;
//     newElement.addEventListener('click', () => {
//         console.log('Responding');
//     });
//     customUI.appendChild(newElement);
// }

// document.body.appendChild(customUI);
