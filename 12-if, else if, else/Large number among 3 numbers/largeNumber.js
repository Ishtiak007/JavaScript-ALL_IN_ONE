var num1=prompt("Enter 1st number: ");
var num2=prompt("Enter 2nd number: ");
var num3=prompt("Enter 3rd number: ");

if(num1>num2 && num2>num3)
document.write("Large number is: "+num1);

else if(num2>num1 && num1>num3)
document.write("Large number is: "+num2);

else
document.write("Large number is :"+num3);