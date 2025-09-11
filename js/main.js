//----------address buttons and slots-------------//
document.querySelector('#begin').addEventListener('click',begin)
document.querySelector('#starp').addEventListener('click',spin)
document.querySelector('#stort').addEventListener('click',spin2)
document.querySelector('#begend').addEventListener('click',spin3)

const slot = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const slot3 = document.getElementById('slot3')

const totalText = document.querySelector('#total')
let total = 50
totalText.innerText = total
const message = document.querySelector('#message')
const matchChecker = []


//------------variables for checking interval--------------//
let interID,interID2,interID3;

function begin() {
    const bid = Number(document.querySelector('#bid').value)
//check for money input. If money is there and not past the total, start the game
    if (total >= bid && bid !== 0) {
        total -= bid
        totalText.innerText = total
        interID = setInterval(randomColor,500)        
        interID2 = setInterval(randomColor2,500)
        interID3 = setInterval(randomColor3,500)    
    } else if (bid === 0 || total < bid) {
        message.innerText = 'Nice Try, Bub.'
    }
}
//---------------function to activate randomization---------//
function spin() {
    console.log('clicked')
    clearInterval(interID)
    interID = undefined
    didYouWin()
}

function spin2() {
    console.log('clicked') 
    clearInterval(interID2)
    interID2 = undefined
    didYouWin()
}

function spin3() {
    console.log('clicked')    
    clearInterval(interID3)
    interID3 = undefined
    didYouWin()
}

function randomColor() {
    const picker = Math.ceil(Math.random()*3)
    if (picker === 1) {
        slot.className = 'blue'
    } else if (picker === 2) {
        slot.className = 'red'
    } else if (picker === 3) {
        slot.className = 'green'
    }
    matchChecker[0] = picker
}

function randomColor2() {
    const picker = Math.ceil(Math.random()*3)
    if (picker === 1) {
        slot2.className = 'blue'
    } else if (picker === 2) {
        slot2.className = 'red'
    } else if (picker === 3) {
        slot2.className = 'green'
    }
    matchChecker[1] = picker
}

function randomColor3() {
    const picker = Math.ceil(Math.random()*3)
    if (picker === 1) {
        slot3.className = 'blue'
    } else if (picker === 2) {
        slot3.className = 'red'
    } else if (picker === 3) {
        slot3.className = 'green'
    }
    matchChecker[2] = picker
}

function didYouWin() {
    if (interID || interID2 || interID3) {
        return }
    if (matchChecker[0]==matchChecker[1] && matchChecker[1]==matchChecker[2]) {
        console.log('you did it!')
    } else {
        console.log('it\'s my money now')
    }
    
}