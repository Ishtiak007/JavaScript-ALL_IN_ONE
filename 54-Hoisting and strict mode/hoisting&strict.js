// hoisting
x = 20;
if(true){
    y = 10;
    console.log(`y = ${y}`)
    var y;
}
console.log(`x = ${x}`);

// use strict

x = 20;
console.log(`x=${x}`)