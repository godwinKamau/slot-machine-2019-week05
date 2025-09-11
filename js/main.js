document.querySelector('#starp').addEventListener('click',spin)
document.querySelector('#stort').addEventListener('click',spin2)
document.querySelector('#begend').addEventListener('click',spin3)
const slot = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const slot3 = document.getElementById('slot3')

let activia, activia2, activia3 = true

let interID,interID2,interID3;

function spin() {
    console.log('clicked')
    if (activia) {
        interID = setInterval(randomColor,500)
        activia = false
    } else {
        clearInterval(interID)
        activia = true
    }
}

function spin2() {
    console.log('clicked')
    if (activia2) {
        interID2 = setInterval(randomColor2,500)
        activia2 = false
    } else {
        clearInterval(interID2)
        activia2 = true
    }
}

function spin3() {
    console.log('clicked')
    if (activia3) {
        interID3 = setInterval(randomColor3,500)
        activia3 = false
    } else {
        clearInterval(interID3)
        activia3 = true
    }
}

function randomColor() {
    console.log('ran')
    const picker = Math.ceil(Math.random()*3)
    if (picker === 1) {
        slot.className = 'blue'
    } else if (picker === 2) {
        slot.className = 'red'
    } else if (picker === 3) {
        slot.className = 'green'
    }
}

function randomColor2() {
    console.log('ran')
    const picker = Math.ceil(Math.random()*3)
    if (picker === 1) {
        slot2.className = 'blue'
    } else if (picker === 2) {
        slot2.className = 'red'
    } else if (picker === 3) {
        slot2.className = 'green'
    }
}

function randomColor3() {
    console.log('ran')
    const picker = Math.ceil(Math.random()*3)
    if (picker === 1) {
        slot3.className = 'blue'
    } else if (picker === 2) {
        slot3.className = 'red'
    } else if (picker === 3) {
        slot3.className = 'green'
    }
}

