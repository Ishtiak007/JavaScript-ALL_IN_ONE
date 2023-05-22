var students = [
    {
        id : 107,
        name : 'Ishtiak Ahmed',
        gpa : 5.00
    },
    {
        id : 102,
        name : 'Kabir Ahmed',
        gpa : 4.00
    },
    {
        id : 105,
        name : 'Tasfia Ahmed',
        gpa : 3.00
    }
]

function studentsName1(){
    return students.filter(function(x){
        return x.gpa > 3
    }).map(function(y){
        return y.name;
    });
}

const studentNames2 =() => students.filter((x)=> x.gpa>3).map((y)=>y.name);




// console.log(studentsName1())
console.log(studentNames2())
