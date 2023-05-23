for(var x=1; x<=100; x=x+1){
    if(x%2 == 0){
        continue;
    }
    document.write(" "+ x);
}
document.write(" end"+"<br> ");

for(var x=1; x<=100; x=x+1){
    if(x%2 != 0){
        continue;
    }
    document.write(" "+ x);
}
document.write(" "+"end");