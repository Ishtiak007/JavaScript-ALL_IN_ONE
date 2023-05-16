const div = document.querySelector('div');
    div.addEventListener("click",function(){
        console.log("CLicked is occured");
});

div.addEventListener("dblclick",function(){
    console.log("dblclicked is occured");
});

div.addEventListener("mousedown",function(){
    console.log("MouseDown is occured");
});

div.addEventListener("mouseup",function(){
    console.log("MouseUp is occured");
});

div.addEventListener("mouseenter",function(){
    console.log("MouseEnter is occured");
});

div.addEventListener("mouseleave",function(){
    console.log("MouseLeave is occured");
});

div.addEventListener("mousemove",function(e){
    // console.log("MouseMove is occured");
    console.log("clientX = " + e.clientX + ", clintY = "+ e.clientY);
    // console.log("offsetX = " + e.offsetX + ", offsetY = "+ e.offsetY);
});
div.addEventListener("mouseover",function(){
    console.log("MouseOver is occured");
    
    // console.log("offsetX = " + e.offsetX + ", offsetY = "+ e.offsetY);

});
