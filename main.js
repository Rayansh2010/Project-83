var mouse_event = "empty";
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var line_width = 1;
var lastposition_x, lastposition_y, currentposition_x, currentposition_y;
var color = "black";

canvas.addEventListener("mouseup", Funcmouseup);

function Funcmouseup(e){
    mouse_event = "mouseUp";
}

canvas.addEventListener("mousedown", FuncmouseDown);

function FuncmouseDown(e){
    mouse_event = "mouseDown";

    color = document.getElementById("colorinput").value;
    line_width = document.getElementById("widthinput").value;
}

canvas.addEventListener("mouseleave", FuncmouseLeave);

function FuncmouseLeave(e){
    mouse_event = "mouseLeave";
}

canvas.addEventListener("mousemove", FuncmouseMove);

function FuncmouseMove(e) {

    currentposition_x = e.clientX - canvas.offsetLeft;
    currentposition_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouseDown"){

        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        console.log("lastpositionx =" + lastposition_x + "lastpositiony ="+ lastposition_y);
        ctx.moveTo(lastposition_x, lastposition_y);

        console.log("currentpositionx =" + currentposition_x + "currentpositiony ="+ currentposition_y);
        ctx.lineTo(currentposition_x, currentposition_y);
        ctx.stroke();

    }

    lastposition_x = currentposition_x;
    lastposition_y = currentposition_y;
}

function eraseeverything(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// The code for touch start here.....

var line_width_touch = 1;
var lastposition_x_touch, lastposition_y_touch, currentposition_x_touch, currentposition_y_touch;
var colortouch = "black";

canvas.addEventListener("touchstart", touchstart);

    function touchstart(e)
    {
        colortouch = document.getElementById("colorinput").value
        line_width_touch = document.getElementById("widthinput").value

        lastposition_x_touch = e.touches[0].clientX - canvas.offsetLeft;
        lastposition_y_touch = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

        currentposition_x_touch = e.touches[0].clientX - canvas.offsetLeft;
        currentposition_y_touch = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        ctx.moveTo(last_position_of_x, last_position_of_y);

        ctx.lineTo(currentposition_x_touch, currentposition_y_touch);
        ctx.stroke();
        

        lastposition_x_touch = currentposition_x_touch; 
        lastposition_y_touch = currentposition_y_touch;
    }