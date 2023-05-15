// large number among 3 numbers

var number1=Number(prompt("Enter 1st number: "));
var number2=Number(prompt("Enter 2nd number: "));
var number3=Number(prompt("Enter 3rd number: "));

var result= number1>number2 && number2>number3 ? " Large number is num1=  "+number1 : number2>number1 && number1>number3 ? " Large number is num2=  "+ number2 : " Large number is num3= "+ number3

document.write(result);
