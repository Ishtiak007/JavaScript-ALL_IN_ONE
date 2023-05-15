document.querySelectorAll(".btn")[0].addEventListener("click",function(){

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text+"is clicked";

});
document.querySelectorAll(".btn")[1].addEventListener("click",function(){

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text+"is clicked";

});
document.querySelectorAll(".btn")[2].addEventListener("click",function(){

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text+"is clicked";

});

for(var i=0; i<3; i++){
    document.querySelectorAll(".btn1")[i].addEventListener("click",function() {
        var text2 = this.innerHTML;
        document.querySelector("h2").innerHTML = text2+ "ott tipachish";
    });
}
