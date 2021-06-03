<template>
    <div>
        <h1>Showcase</h1>
        <g-button hierarchy='primary' label='Primary' />
        <g-button hierarchy='secondary' label='Secondary' />
    </div>
</template>

<script>
import '../node_modules/grics-front-end-library/dist/index.css'

import Components from 'grics-front-end-library'

export default {
  name: 'App',
  components: {
    ...Components,
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
