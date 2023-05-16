// const div = document.querySelector("div");

// div.addEventListener("click",function(e){
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);

//     // console.log(e.target.innerHTML);

//     // console.log(e.target.textContent);

//     // console.log(e.target.innerText);
// });

const varName = document.querySelectorAll('.btn');
console.log(varName);
Array.from(varName).map((button) =>{
    button.addEventListener("click",function(e){
        console.log(e.target.innerText);
    });
});