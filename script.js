function whenClick() {
    window.location.href = "idea.html";
}
let openpagebutton =  document.getElementById('learnmore');
openpagebutton.addEventListener('click', whenClick)

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

let websitesdisplay = document.getElementById('websitebutton')
function runWebsite() {
    window.open('https://jordanl141.wixsite.com/artai')
};
websitesdisplay.addEventListener('click', runWebsite)


let linkedindisplay = document.getElementById('linkedin')
function runLinkedin() {
    window.open('https://www.linkedin.com/in/jordan-liu-4a1468307/')
};
linkedindisplay.addEventListener('click', runLinkedin)


let facebookdisplay = document.getElementById('facebook')
function runFacebook() {
    window.open('https://www.facebook.com/jordan.liu.7169/')
};
facebookdisplay.addEventListener('click', runFacebook)
