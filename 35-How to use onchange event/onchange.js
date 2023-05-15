// <input /> - text, number, password,  email,  color, radio,  checkbox,  search, time,  date,  datetime,  week,  month,  url,  tel,  file.
// <select>
// <textarea>


// ...........................................


// const input = document.querySelector("input");
// document.write(input);
// input.addEventListener('change',changeHandeler)


// function changeHandeler(event){
//     // console.log("Changed");
//     //console.log(event);
//     //console.log(event.target);
//     //console.log(event.target.className);
//     // console.log(event.target.id);
//     console.log(event.target.value);




// const programs = document.querySelectorAll("input[name=program]");
// console.log(programs); 

// Array.from(programs).map((programs)=>{
//    programs.addEventListener("change",programHandeler) 
// });
// function programHandeler(event){
//     // console.log("cheked");
//     if(event.target.checked){
//         console.log(event.target.value);
//     }
// }



const department = document.querySelector('#department');
//console.log(department);
department.addEventListener('change',HandleDepartment);

function HandleDepartment(event){
    console.log(event.target.value);
}