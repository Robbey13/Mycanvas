 canvas=document.getElementById("myCanvas");
 color="red";
console.log("canvas",canvas);
console.log("document",document)
function mymousedown(e) 
{
   console.log("mousedown")
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y)
}

canvas.addEventListener("mousedown",mymousedown)
 var ctx=canvas.getContext("2d");
function circle(mouse_x,mouse_y)
{
      console.log("mousecircle")
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40,0,2*Math.PI);
    ctx.stroke();
}