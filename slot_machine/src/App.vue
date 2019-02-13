<template>
  <div id="app">
    <SlotMachine msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SlotMachine from './components/Slot_machine.vue'

export default {
  name: 'app',
  components: {
    SlotMachine
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
