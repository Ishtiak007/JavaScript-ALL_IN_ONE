//for...of,for...in

// const names = ["s1","s2","s3"]
// for (let name of names){
//     console.log(name)
// }

let students ={
    ID : 107,
    name : 'Ishtiak ahmed',
    cgpa : 4.09
}
// for ( let x in students){
//     console.log(students[x])
// }

for (let x in students){
    console.log(`${x} : ${students[x]}`)
}