//array destructure
let numbers = [10,20,30,40,50]
let [num1,num2,num3,num4,num5] = numbers
console.log(num2,num4)


//swap variables
let a=10, b=20;
[a,b] = [b,a]
console.log(a,b)


//object destructure
const studentInfo ={
    id : 101,
    fullName : 'Ishtiak Ahmed',
    gpa: 3.67
}
const {id,fullName} = studentInfo
console.log(id)
console.log(fullName)
console.log(studentInfo.gpa)



//nested object destructure
const studentInfos ={
    id : 101,
    fullNames : 'Ishtiak Ahmed',
    gpa: 3.67,
    language : {
        native : 'bangla',
        beginner : 'english'
    }
}
const {fullNames,language} = studentInfos
console.log(fullName)
console.log(language.beginner)



//destructuring function parameters
const studentInfoss = ({id , fullName}) =>{
    console.log(`${student.id},${student.fullName}`)
}
const student = {
    id : 107,
    fullName: 'Ishtiak ahmed'
}
studentInfoss(student)