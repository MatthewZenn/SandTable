<script setup>
import Header from './components/Header.vue'
import Context from './components/Context.vue'
import Canvas1 from './components/Canvas1.vue'
</script>

<template>
  <Header/>
  <Canvas1/>
  <Context/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 100%;
  height: 100%;
  margin: 0;
}
html {
  background-color: rgb(20, 20, 20);
}

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
