const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');


saveButton.addEventListener('click',startClock);
function startClock(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = format(minutes);
    seconds = format(seconds);

    let time = hours+ ":" + minutes + ":" + seconds;

    message.textContent = time;

   setInterval(startClock,1000);
}

function format(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}