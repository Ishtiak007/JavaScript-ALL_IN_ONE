// alert("Hello Ishtiak");




// function somethingDelete(){
//     let value = confirm("Are you sure?");
//     if(value){
//         console.log("Deleted");
//     }
//     else{
//         console.log("Not deleted");
//     }
// }
// somethingDelete();



function welcomeMessage(){
    var h1 = document.createElement('h1');
    let text;

    var name = prompt("Enter your name: ");
    if(name == null || name== ''){
        text = 'No name found, Enter your name'
    }
    else{
        text = name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);


    document.body.appendChild(h1);
}

welcomeMessage();