var m=parseInt(prompt("Enter starting value:"));
var n=parseInt(prompt("Enter last value:"));
var sum=0;

for(var x=m; x<=n; x=x+1){
    sum= sum + x;
}
document.write(sum);