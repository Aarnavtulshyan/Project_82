Canvas
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color
var radius
var width
var mouseEvent = "empty";
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousemove"
}
