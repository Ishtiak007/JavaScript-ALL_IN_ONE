//callback and higher order function
function squre(x){
    console.log(`squre of ${x}: ${x*x}`);
}
squre(5);

// const y = squre;
// y(5);

function higherOrderFunction(num, callback){
    callback(num);
}

higherOrderFunction(7, squre)