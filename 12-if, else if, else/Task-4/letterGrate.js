//Letter grade
var marks=prompt("Enter Your Marks: ");

if(marks>=80 && marks<=100)
document.write("Your resutl is A+ ");

else if(marks>=70 && marks<=79)
document.write("Your result is A");

else if(marks>=60 && marks<=69)
document.write("Your result is A-");

else if(marks>=50 && marks<=59)
document.write("Your result is B");

else if(marks>=40 && marks<=49)
document.write("Your result is C");

else if(marks>=33 && marks<=39)
document.write("Your result is D");

else if(marks>=1 && marks<33)
document.write("Fail");

else
document.write("Wrong Input");