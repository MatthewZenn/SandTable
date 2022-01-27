<template>
    <modal name="Sine" draggable=".heading">
        <div  class="slidecontainer">
            <h3 class="heading">&#8767; Sine</h3>
            <input type="number" min="0" max="1" value="0.5" class="slider" step=".01" id="myRange">
            <input type="number" min="0" max="100" value="50" class="slider" step="1" id="myRange2">
        </div>
    </modal>
</template>

<style scoped>
.slidecontainer {
    position: relative;
    top: 400px;
    left: 100px;
    background-color:rgb(35, 35, 35);
    width: fit-content;
    height: fit-content;
}
.slider {
    appearance: none;
    width: 100px;
    height: 20px;
    background: rgb(35, 35, 35);
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: 1px solid #DF77FF;
    color: white;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}

h3 {
    color: white;
    margin: auto;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #DF77FF;
    padding: 5px;
}
</style>

<script>
export default {
    name: 'MyComponent',
    methods: {
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },
    mount () {
        this.show()
    }
}
</script>