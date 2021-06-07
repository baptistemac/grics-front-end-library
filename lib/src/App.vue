<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <g-button label='label' />
        <g-button label='label' hierarchy='secondary' />
        <g-card title='Ceci est une carte' buttonLabel='label' />
        
    </div>
</template>

<script>
import Components from './components'
import './styles/index.css';

export default {
  name: 'App',
  components: {
    ...Components
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
