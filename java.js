//--  Code for Navbar --//

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function scrollFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {scrollFunction()};
//--  /Code for Navbar --//

//--  Code for button --//
const selectButton = document.querySelector('.pick');

selectButton.addEventListener('click', function() {
    var lookup = document.querySelector('#Char-select').value;
    window.open(lookup);
});

//-- /code for button  --//


