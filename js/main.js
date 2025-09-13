//----------address buttons and slots-------------//
document.querySelector('#begin').addEventListener('click',begin)
document.querySelector('#starp').addEventListener('click',spin)
document.querySelector('#stort').addEventListener('click',spin2)
document.querySelector('#begend').addEventListener('click',spin3)

const slot = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const slot3 = document.getElementById('slot3')

const totalText1 = document.querySelector('#total1')
const totalText2 = document.querySelector('#total2')

let total = 50
let totalText = String(total)
totalText1.innerText = totalText[0]
totalText2.innerText = totalText[1]


const message = document.querySelector('#message')
const matchChecker = []


//------------variables for checking interval--------------//
let interID,interID2,interID3;

function begin() {
    const bid = Number(document.querySelector('#bid').value)
//check for money input. If money is there and not past the total, start the game
    if (total >= bid && bid !== 0) {
        total -= bid
        if (total-10 < 0) {
            totalText = '0' + String(total)
        } else {
            totalText = String(total)
        }
        totalText1.innerText = totalText[0]
        totalText2.innerText = totalText[1]
        interID = setInterval(randomColor,500)        
        interID2 = setInterval(randomColor2,500)
        interID3 = setInterval(randomColor3,500)
        message.innerText = 'press the buttons to stop the spins'    
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
    const picker = Math.ceil(Math.random()*5)
    if (picker === 1) {
        slot.className = 'blue1'
    } else if (picker === 2) {
        slot.className = 'red1'
    } else if (picker === 3) {
        slot.className = 'green1'
    } else if (picker === 4) {
        slot.className = 'cosmic'
    } else {
        slot.className = 'cactus'
    }
    matchChecker[0] = picker
}

function randomColor2() {
    const picker = Math.ceil(Math.random()*5)
    console.log(picker)
    if (picker === 1) {
        slot2.className = 'blue2'
    } else if (picker === 2) {
        slot2.className = 'red2'
    } else if (picker === 3) {
        slot2.className = 'green2'
    } else if (picker === 4) {
        slot2.className = 'cosmic'
    } else {
        slot2.className = 'cactus2'
    }
    matchChecker[1] = picker
}

function randomColor3() {
    const picker = Math.ceil(Math.random()*5)
    if (picker === 1) {
        slot3.className = 'blue3'
    } else if (picker === 2) {
        slot3.className = 'red3'
    } else if (picker === 3) {
        slot3.className = 'green3'
    } else if (picker === 4) {
        slot3.className = 'cosmic'
    } else {
        slot3.className = 'cactus3'
    }
    matchChecker[2] = picker
}

function didYouWin() {
    if (interID || interID2 || interID3) {
        return }
    if (matchChecker[0]==matchChecker[1] && matchChecker[1]==matchChecker[2]) {
        let bid = document.querySelector('#bid')
        total += Number(bid.value) * 2
        bid.value = ''
        if (total-10 < 0) {
            totalText = '0' + String(total)
        } else {
            totalText = String(total)
        }
        totalText1.innerText = totalText[0]
        totalText2.innerText = totalText[1]       
        message.innerText = 'you did it!'
    } else {
        document.querySelector('#bid').value = ''
        message.innerText = 'oof...'
    }
    
}