function whenClick() {
    alert("button clicked")
}
let openpagebutton =  document.getElementById('learnmore');
openpagebutton.addEventListener('click', whenClick)

function whenClick() {
    alert("button clicked")
}
let searchbarbutton =  document.getElementById('searchbutton');
searchbarbutton.addEventListener('click', whenClick)

let colorbutton = document.querySelector('#random-color')

function changebackground() {
    alert('clicked')
    document.body.style.backgroundColor = "rgb(0, 0, 0)"
}
colorbutton.addEventListener('click', changebackground)