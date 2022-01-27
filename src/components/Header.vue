<template>
  <header>
      <img class="logo" src="/Logo.svg">
      <button class="save" @click="printresult()">Save</button>
  </header>
</template>

<style scoped>
header {
    height: 50px;
    background-color: rgb(35, 35, 35);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
}

.save {
    position: relative;
    margin: auto 0;
    width: 100px;
    height: 30px;
    background-color: transparent;
    border: none;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 14pt;
    border-radius: 5px;
}

.save:hover {
    background-color: #DF77FF;
    cursor: pointer;
}

.logo {
    width: 12%;
    position: relative;
    justify-content: center;
}
</style>

<script setup>
function printresult() {
    Canvas2Image.saveAsImage(canvas, 800, 800);
}
</script>