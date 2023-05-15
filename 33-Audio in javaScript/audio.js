
for(var i=0; i<3; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text)        
        });

}

function audioPlay(text){
    switch(text){
        case "Play Audio1":
            var audio = new Audio("audio1.mp3");
            audio.play();
            break;
    
    
            case "Play Audio2":
            var audio = new Audio("audio2.mp3");
            audio.play();
            break;
    
    
            case "Play Audio3":
            var audio = new Audio("audio3.mp3");
            audio.play();
            break;
    }
}




