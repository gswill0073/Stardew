
//  Code for button  //

const selectButton = document.querySelector('button.pick');

selectButton.addEventListener ('click', () => {
    var lookup = document.querySelector('#Char-select');
    
    alert(lookup);


})

//  adhoc code  //

function update(previewPic){
    var src = previewPic.getAttribute("Characters/Alex.html");
    var alt = previewPic.getAttribute("Preview of the Characters website");
    document.getElementById('Alex').style.backgroundImage = URL(src);
    document.getElementById('Alex').innerHTML = alt;
}

function unDo(){
    document.getElementById('Alex').style.backgroundImage = "none";
    document.getElementById('Alex').innerHTML = "MouseOver Image to Display Here";
}