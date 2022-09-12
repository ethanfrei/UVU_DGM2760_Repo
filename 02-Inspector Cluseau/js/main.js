document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "Inspector Clouseau quote"

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels high`

let offset = `Window offset is ${window.screenY} from the left edge and are ${window.screenY} from the top of the display`

let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
}
reDisplay()
