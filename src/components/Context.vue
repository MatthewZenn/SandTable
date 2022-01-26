<template>
    <div class="context-menu" id="context-menu">
        <div class="item">Line</div>
        <div class="item">Polygon</div>
        <div class="item">Function</div>
        <br>
        <div class="item">Sine</div>
        <div class="item">Wave</div>
        <div class="item">Fibbinacci</div>
        <div class="item">Noise</div>
        <br>
        <div class="item">Output</div>
        <div class="item">Color</div>
        <div class="item">Vector</div>
        <div class="item">Math</div>
    </div>
</template>

<style scoped>
.context-menu {
    position: fixed;
    z-index: 10000;
    width: 150px;
    background: rgb(35, 35, 35);
    transform: scale(0);
    transform-origin: top left;
    z-index: 100;
}

.context-menu.active {
    transform: scale(1);
}

.context-menu .item {
    padding: 8px 10px;
    font-size: 15px;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.context-menu .item:hover {
    background-color: #DF77FF;
}
</style>

<script setup>
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
</script>