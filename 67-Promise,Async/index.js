//synchronous programming
const taskOne = () =>{
    console.log("Task1");
}

const taskTwo = () =>{
    console.log("Task2");
}

const dataLoading = () =>{
    console.log("Task3. Data Loading");
}

const taskThree = () =>{
    setTimeout(dataLoading,3000);
}

const taskFour = () =>{
    console.log("Task4");
}

const taskFive = () =>{
    console.log("Task5");
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();