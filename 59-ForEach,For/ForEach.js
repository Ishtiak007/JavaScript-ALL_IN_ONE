// for va forEach

// var numbers =[10,20,30,40,50];
// for(var x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }

var numbers =[10,20,30,40,50];
numbers.forEach(myFunction)

function myFunction(x){
    console.log(x)
}

// squre number from forEach
// var number = [10,20,30,40,50];
// var squreNumber = [];
// number.forEach(function(x){
//     squreNumber.push(x*x);
// })
// console.log(squreNumber)

var numbers =[10,20,30,40,50];
console.log(numbers)
numbers.forEach(function(x,index,arr){
    arr[index]=x+5;
})
console.log(numbers)