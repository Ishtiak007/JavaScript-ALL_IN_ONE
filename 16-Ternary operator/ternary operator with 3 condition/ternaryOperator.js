var number=Number(prompt("Enter any number:"));

// if(number>0){
//     document.write("positive");
// }
// else if(number<0){
//     document.write("negative");
// }
// else{
//     document.write("zero");
// }
var result= number>0 ? "Positive" : number<0 ? "Negative" : "Zero"

document.write(result);
