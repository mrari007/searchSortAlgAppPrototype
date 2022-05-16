var canvas = document.getElementById("bigoCanvas");
var ctx = bigoCanvas.getContext("2d");

ctx.backgroundColor = "#212529";
ctx.shadowOffsetX = 25;
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 17;
ctx.shadowColor = "#3e3e44"

ctx.font="bold 800% Verdana"
ctx.fillStyle = "#212529";
ctx.fillText("BIG-O", 150, 300);
ctx.strokeStyle = "#212529"
ctx.strokeText("BIG-O", 147, 297);

function returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}


