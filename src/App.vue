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
</style>
