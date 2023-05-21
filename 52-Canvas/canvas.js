var canva = document.getElementById("myCanvas");
var cntx = canva.getContext("2d");

cntx.lineWidth = 3;

cntx.strokeStyle = "black";
cntx.strokeRect(10,10,380,280);


cntx.fillStyle = "green";
cntx.fillRect(12,12,376,276);

var centerX = canva.width / 2;
var centerY = canva.heigth / 2;

cntx.beginPath();
cntx.arc(centerX,centerY,80,0,2*Math.PI,false);
cntx.fillStyle = "red";
cntx.fill();
cntx.stroke();