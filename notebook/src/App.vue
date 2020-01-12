<template>
  <div id="app">
    <entry-layout></entry-layout>
  </div>
</template>

<script>
import entryLayout from '@/views/layout'

export default {
  name: 'app',
  components: {
    entryLayout
  }
}
</script>

<style>
#app {
  height: 100%;
  font-size: 0.14rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  box-sizing: border-box;
}
</style>
