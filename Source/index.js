const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

color2.oninput = function () {
    var lineColor = color2.value;
    ctx.strokeStyle = lineColor;
}

window.addEventListener("contextmenu", function(event){
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});

window.addEventListener("click", function (){
    document.getElementById("context-menu").classList.remove("active");
});

function printresult() {
    Canvas2Image.saveAsImage(canvas, 800, 800);
}

