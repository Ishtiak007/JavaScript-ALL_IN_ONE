// setTimeout(()=>{
//     console.log("Hello there");
// },4000);



// setTimeout(display , 2000);

// function display(){
//     console.log("display Function");
// }


// const saveButton = document.querySelector('.save-btn');
// const message = document.querySelector('.message');

// saveButton.addEventListener('click',saveUser);
// function saveUser(){
//     message.textContent = "user registration successful";
//     setTimeout(()=>{
//         message.textContent = "";
//     },2000);
// }

const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');

saveButton.addEventListener('click',displayCount);

function displayCount(){
    let count = 0;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;

    },100);
}