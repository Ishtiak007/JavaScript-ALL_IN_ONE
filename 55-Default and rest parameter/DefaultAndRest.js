"use strict"
// function message(text = "Hello this is default parameter"){
//     console.log(`${text}`);
// }
// message("I love JS ES6");
// message("I love js es6");

function sum(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}
sum(10,20,30,40,50);