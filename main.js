//addition warning
  setTimeout(() => {
      alert('এখানে ডোম এর কিছু জিনিস টেস্ট করা হয়েছে, ইউ আই / ইউ এক্স এর দিকে নজর দেয়া হয়নি।  তবে সুন্দর একটি ডিজাইন দেখতে আপনার ব্রাউজার এ জাভাস্ক্রিপ্ট ডিজেবল করে পেজ টি রিফ্রেশ করুন.. ')
  },5000) 

// task 1 done , means script added. LOL.
console.log('script add korte parchi');

//task 2
let allH2 = document.getElementsByTagName('h2')
for(let h2 of allH2) {
    h2.style.color = 'lightblue'
}

//task 3
document.getElementById('backpack-area').style.backgroundColor = 'tomato';

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
    event.target.setAttribute('src', './images/shoes/cshoe-1.png')
})
document.getElementById('shoe1').addEventListener('mouseleave', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-1.png')
})
         //shoe2
document.getElementById('shoe2').addEventListener('mouseenter', (event) => {
    event.target.setAttribute('src', './images/shoes/cshoe-2.png')
})
document.getElementById('shoe2').addEventListener('mouseleave', (event) => {
    event.target.setAttribute('src', './images/shoes/shoe-2.png')
})
           //shoe3
document.getElementById('shoe3').addEventListener('mouseenter', (event) => {
    event.target.setAttribute('src', './images/shoes/cshoe-3.png')
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