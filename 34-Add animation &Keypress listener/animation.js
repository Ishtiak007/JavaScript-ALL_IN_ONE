
for(var i=0; i<3; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        
        console.log(text);

        audioPlay(text);

        playAnimation(text);
        
        });

}

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audio1.mp3");
            audio.play();
            break;
    
    
            case "b":
            var audio = new Audio("audio2.mp3");
            audio.play();
            break;
    
    
            case "c":
            var audio = new Audio("audio3.mp3");
            audio.play();
            break;
    }
}

function playAnimation(text){
    var selectionButton = document.querySelector("." + text);
    selectionButton.classList.add("anim");

    setTimeout(function(){
        selectionButton.classList.remove("anim");
    },1000);
}


document.addEventListener("keypress",function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
})