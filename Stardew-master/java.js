//--  Code for Navbar --//

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function () { scrollFunction() };
//--  /Code for Navbar --//

//--  Code for button --//

function btnSelector (event) {
    var lookup = document.querySelector(event).value;
    window.open(lookup);
}

//-- /code for button  --//

//-- hiding example page  --//

var charShow = document.querySelector(".character_temp");
var cropShow = document.querySelector(".crop_temp");
var buildShow = document.querySelector(".building_temp");
function hideAndShow(event) {

    if (event.style.display === "none") {
        event.style.display = "block"
    } else {
        event.style.display = "none";
    }
}

//-- /hiding example page  --//
