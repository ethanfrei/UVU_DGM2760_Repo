
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"//

document.querySelector('#company').innerText = "Joe's Bed and Breakftast"

document.querySelector('header > h2').innerText = "Best BnB ever!"

let userName = prompt("What is your name?")

/* let message = "Hello " + userName + ", welcome to the best BnB you'll ever find!" */

let message = `Hello${userName}, welcome to the best BnB you'll ever find!`

document.querySelector('#greeting').innerText = message