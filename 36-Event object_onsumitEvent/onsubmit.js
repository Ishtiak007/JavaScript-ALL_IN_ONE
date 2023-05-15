//FInding the elements

const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");


form.addEventListener('submit',formHandeler);

function formHandeler(e){
    e.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);


    const userInfo = {
        name : name.value,
        email : email.value,
        password : password.value,
    };
    console.log(userInfo);
    
    name.value = "";
    email.value = "";
    password.value = "";

}