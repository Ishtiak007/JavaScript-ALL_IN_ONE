function addNumber(x,y,z){
    return x + y + z;
}
let numbers = [1,2,3]
//console.log(addNumbers(...numbers))

let numbers1 = [5, ...numbers,6]
console.log(numbers1)

// concat
let number1 = [1,2,3]
let number2 = [4,5,6]
let numberss = [...number1, ...number2]
console.log(numberss)


let p1 = {
    name : "Ishtiak ahmed",
    age : 23
}
let p2 ={
    nationality : 'Bangladesh',
    occupation : 'student'
}
let p = {...p1, ...p2}

console.log(p)