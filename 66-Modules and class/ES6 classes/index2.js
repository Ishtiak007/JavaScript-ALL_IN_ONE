class student {
    
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
set studentName(name){
    this.name = name;
}
get studentInfo(){
    return this.id + "" + this.name;
}

let s1 = new student(107,"Ishtiak ahmed");

// console.log(s1.id);
// console.log(s1.name);

// s1.studentName ="pupupu";
// console.log(s1.name);

let s1 = new student(107,"Ishtiak");
console.log(s1.studentInfo)