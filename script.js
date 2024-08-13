function whenClick() {
    window.location.href = "idea.html";
}
let openpagebutton =  document.getElementById('learnmore');
openpagebutton.addEventListener('click', whenClick)

// function whenClick() {
//     alert("button clicked")
// }
// let searchbarbutton =  document.getElementById('searchbutton');
// searchbarbutton.addEventListener('click', whenClick)

// let colorbutton = document.querySelector('#random-color')

// function changebackground() {
//     alert('clicked')
//     document.body.style.backgroundColor = "rgb(0, 0, 0)"
// }
// colorbutton.addEventListener('click', changebackground)

document.getElementById('searchbutton').addEventListener('click', addcontact) 
    function addcontact() {
    let contact = document.getElementById('new-contact').value;
    let li = document.createElement('li');

    li.textContent = contact;

    document.getElementById('contact-list').appendChild(li);

    document.getElementById('new-contact').value = '';
    alert("Thank You! Contact receivied")
};
let colorbutton = document.getElementById('searchbutton')
function changebackground() {
    document.querySelector('.container2').style.backgroundColor = `rgb(128,128,128)`
}
colorbutton.addEventListener('click', changebackground)


