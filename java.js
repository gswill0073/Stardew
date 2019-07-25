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

//--  Code for buttons --//

function btnSelector (event) {
    var lookup = document.querySelector(event).value;
    window.open(lookup);
}

//-- /code for buttons  --//

//-- hiding example page  --//

function hideAndShow(event) {
    var hideShow = document.querySelector(event);
    if (hideShow.style.display === "none") {
        hideShow.style.display = "block"
    } else {
        hideShow.style.display = "none";
    }
}

//-- /hiding example page  --//
