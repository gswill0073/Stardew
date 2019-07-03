//  Code for button  //
const selectButton = document.querySelector('.pick');


selectButton.addEventListener('click', function() {
    var lookup = document.querySelector('#Char-select').value;
    window.open(lookup);
});




// /code for button  //



//  adhoc code  //

function update(previewPic) {
    var src = previewPic.getAttribute("Characters/Alex.html");
    var alt = previewPic.getAttribute("Preview of the Characters website");
    document.getElementById('Alex').style.backgroundImage = URL(src);
    document.getElementById('Alex').innerHTML = alt;
}

function unDo() {
    document.getElementById('Alex').style.backgroundImage = "none";
    document.getElementById('Alex').innerHTML = "MouseOver Image to Display Here";
}