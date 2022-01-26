const freq = document.getElementById("myRange")
const amp = document.getElementById("myRange2")

freq.oninput = function () {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, canvas.height/2 + Math.sin(i*freq.value) * amp.value);
    }
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

amp.oninput = function () {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, canvas.height/2 + Math.sin(i*freq.value) * amp.value);
    }
    ctx.lineWidth = 3
    ctx.stroke();
    ctx.closePath();
}
