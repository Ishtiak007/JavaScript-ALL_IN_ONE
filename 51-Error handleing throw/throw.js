//Error handeling -try, catch, finally
//The throw startement--> create custom crrors. 

document.querySelector("#checkBtn").addEventListener("click",function(){
    var num = document.querySelector("#numTextfield").value;

    
    try{
        if(num < 5){
            throw "Input is too low"
        }
        else if(num > 10){
            throw "Input number is too high"
        }
    }catch(err){
        console.log(err);
    }

});