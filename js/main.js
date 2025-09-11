document.querySelector('#starp').addEventListener('click',spin)
const slot = document.getElementById('slot1')

let activia = true
let interID;


function spin() {
    console.log('clicked')
    if (activia) {
        interID = setInterval(randomColor,700)
        activia = false
    } else {
        clearInterval(interID)
        activia = true
    }
}

function randomColor() {
    console.log('ran')
    const picker = Math.floor(Math.random()*4)
    if (picker === 1) {
        slot.className = 'blue'
    } else if (picker === 2) {
        slot.className = 'red'
    } else if (picker === 3) {
        slot.className = 'green'
    }
}