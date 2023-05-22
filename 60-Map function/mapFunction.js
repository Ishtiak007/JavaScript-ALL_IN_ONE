// var numbers =[2,3,4,5]
// var squreNumbers =[]

// numbers.forEach(function(x){
//     squreNumbers.push(x*x)
// })
// console.log(squreNumbers)

var numbers =[2,3,4,5]
var squreNumbers = numbers.map(function(x){
    return x*x;
})
console.log(squreNumbers)
console.log(numbers)



// filter
var numberss = [22,31,4,5,35,26,78]
var newNumberss = numberss.filter(function(x){
    return x>10;
})
console.log(newNumberss)