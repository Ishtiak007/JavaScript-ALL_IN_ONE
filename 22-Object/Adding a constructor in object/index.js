function student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}
var student1= new student("Ishtiak", 23, 2.09, ["Bangla","English","Urdu","Australian"]);
var student2= new student("Tasfia", 22, 2.99, ["Bangla","English","Urdu","Australian"]);
var student3= new student("Samanta", 25,3.09, ["Bangla","English","Tamil","Knanata"]);
var student4= new student("Puja hegde", 23, 3.39, ["Bangla","English","Urdu","Bhojpuri"]);

document.write("<br>"+ student1.name);
document.write("<br>"+ student1.age);
document.write("<br>"+ student1.cgpa);
document.write("<br>"+ student1.lang);