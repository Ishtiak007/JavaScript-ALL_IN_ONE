// image slider

var photos = ["Facebook-pp.jpg","image1.jpg","image2.jpg"];
var imageTag = document.querySelector("img");

var count = 0;

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imageTag.src = photos[count];
    }
    else{
        imageTag.src = photos[count];
    }
    
}
function prev(){
    count--;
    if(count < 0){
        count = photos.length -1;
        imageTag.src = photos[count];
    }
    else{
        imageTag.src = photos[count];
    }
}