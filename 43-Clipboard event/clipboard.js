const input = document.querySelector("input");
const p = document.querySelector("p");
input.addEventListener('copy',function(){
    p.innerHTML = "you have copied";
    console.log('You have copied');
});

input.addEventListener('cut',function(){
    p.innerHTML = "you have cut";
    console.log('You have cut');
});

input.addEventListener('paste',function(){
    p.innerHTML = "you have pasted"
    console.log('You have pasted');
});