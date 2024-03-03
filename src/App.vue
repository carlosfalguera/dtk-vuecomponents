<template>
  <dtkSimpleButton msg="Welcome to Your Vue.js App">
    Click in this dtkSimpleButton
  </dtkSimpleButton>
</template>

<script>
import dtkSimpleButton from './components/Buttons/dtkSimpleButton.vue'

export default {
  name: 'App',
  components: {
    dtkSimpleButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
