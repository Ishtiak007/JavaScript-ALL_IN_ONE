var sum=0;
var x=1;
while(x<=100){
    if(x % 3 == 0 && x % 5 == 0){
        document.write("<br> "+ x);
        sum= sum+x;
    }
    
    x= x+1;
}
document.write("<br>"+"Answer: " +sum);