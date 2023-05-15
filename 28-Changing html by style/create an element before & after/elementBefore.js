//creating html element
var heading3 = document.createElement("h1");
var text = document.createTextNode("Amader desher nam holoBangladesh");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

// removeing element
var heading2 = document.getElementsByTagName("h1")[1];  //html er heading takee select korlam
myDiv.removeChild(heading2);    //kar moddhe theke remove korbo sei tha bole dilam & kaj ok


//heading1 add at the top
var heading1 = document.createElement("h1");
var text1 = document.createTextNode("Tomader desher nam ki?");
heading1.appendChild(text1);

var heading4 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading1, heading4);//ekhan e dui ta value karon 1st ta je ta add hobe 2nd ta holo jar shamone add hobe
