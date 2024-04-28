var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('mousemove', draw);

function draw(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.fill();
}