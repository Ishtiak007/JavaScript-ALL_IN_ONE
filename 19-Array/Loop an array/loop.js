var num=new Array();
for(var i=0; i<5; i++){
    num[i]=parseInt(prompt("Enter number:"));
}

var sum=0;

for(var i=0; i<5; i=i+1){
    document.write("<br>"+num[i]);
    sum=sum+ num[i];
}
document.write("<br>"+"Sum: "+sum);
