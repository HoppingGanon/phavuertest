<template>
  <Scene name="App" :autoStart="true">
    <Rectangle
      :x="100"
      :width="100"
      :height="100"
      :origin="0"
      :fillColor="0x888888"
    />
  </Scene>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Rectangle, Scene } from 'phavuer'

export default defineComponent({
  name: 'App',
  components: {
    Scene,
    Rectangle,
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
