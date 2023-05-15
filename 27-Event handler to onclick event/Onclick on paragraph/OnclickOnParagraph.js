
//for paragraph button
function clikMe(){
    var myVariable = document.querySelector("#clickMEid");
    myVariable.innerHTML = "You have clicked button one";
}

function clikMeToo(){
    var myVariable = document.querySelector("#clickMEid");
    myVariable.innerHTML = "You have clicked button two";
}

//for image button
var myImage = document.querySelector("#image1");
function imageOne() {
    myImage.src = "Facebook-PP.jpg";
}
function imageTwo() {
    myImage.src = "img2.jpg";
}
