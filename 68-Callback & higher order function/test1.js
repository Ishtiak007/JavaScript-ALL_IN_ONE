//synchronous programming
const taskOne = (callback) =>{
    console.log("Task1");
    callback();
}

const taskTwo = (callback) =>{
    console.log("Task2");
    callback();
}

const taskThree = (callback) =>{
    setTimeout(()=>{
        console.log("Task3.Data loading");
        callback();
    },3000);
    
}

const taskFour = (callback) =>{
    console.log("Task4");
    callback();
}

const taskFive = (callback) =>{
    console.log("Task5");
    callback();
}


taskOne(() =>{
    taskTwo(() =>{
        taskThree(() =>{
           taskFour(() =>{
            taskFive()            
           });
        });
    });
});

console.log("Hello");
document.querySelector("button").addEventListener('click', ()=>{
    console.log('Button is clicked')
});
console.log("Okay bye");