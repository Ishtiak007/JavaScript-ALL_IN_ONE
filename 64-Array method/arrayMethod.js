//find(callback,value)return the value of the first element that pass certain condition 
let numbers = [5,67,12,88,54,44];
const evenNumber = (value,index,array) =>{
    if (value%2 ===0)
    return value;
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex =numbers.findIndex(evenNumber);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);


const studentss =[
    {
        id:101,
        gpa:3.3
    },
    {
        id:102,
        gpa:4.3
    },
    {
        id:103,
        gpa:22.3
    },
    {
        id:104,
        gpa:3.3
    },
]
console.log(studentss.find(x => x.gpa>4))
    


//findIndex(callback,value) return the index of the first element that pass certain condition