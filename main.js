setTimeout(() => {
    alert('You might experience some weird browsing experience. take it easy, this website is just for DOM testing')
}, 5000)


// task 1 done , means script added. LOL.
console.log('script add korte parchi');

//task 2
let allH2 = document.getElementsByTagName('h2')
for(let h2 of allH2) {
    h2.style.color = 'lightblue'
}

//task 3
let backpack = document.getElementById('backpack-area');
backpack.addEventListener('mouseenter', (event) => {
    backpack.style.backgroundColor = 'tomato';
    setTimeout(() => {
        backpack.style.backgroundColor = '#fff'
    },3000)
})

//task 4
let allCards = document.getElementsByClassName('card');
for(let card of allCards) {
    card.style.borderRadius = '30px'
}

//task 5
function clickHandler() {
    console.log('buy now button has been clicked');
}

//task 6
let allButton = document.getElementsByTagName('button');

for(let button of allButton) {
    button.addEventListener('click',(event) => {
        event.target.parentNode.removeChild(event.target)
    })
}

//task 7
let userInput = document.getElementById('userinput');
let targetButton = document.getElementById('send');

userInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    if(event.target.value == 'email') {
        targetButton.removeAttribute('disabled')
    } else {
        targetButton.setAttribute('disabled', true)
    }
})


//task 8

       //shoe1
document.getElementById('shoe1').addEventListener('mouseenter', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-3.png')
})
document.getElementById('shoe1').addEventListener('mouseleave', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-1.png')
})
         //shoe2
document.getElementById('shoe2').addEventListener('mouseenter', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-1.png')
})
document.getElementById('shoe2').addEventListener('mouseleave', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-2.png')
})
           //shoe3
document.getElementById('shoe3').addEventListener('mouseenter', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-1.png')
})
document.getElementById('shoe3').addEventListener('mouseleave', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-3.png')
})



//task 9
let targetArea = document.getElementById('bgcolordomtest');
targetArea.addEventListener('dblclick', (event) => {
    targetArea.style.backgroundColor = 'coral'
})
targetArea.addEventListener('mouseleave', (event) => {
    targetArea.style.backgroundColor = '#FEEAE9'
})