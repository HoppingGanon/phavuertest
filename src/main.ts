import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import 'phaser'
import { createPhavuerApp } from 'phavuer'

const vueApp = createApp(App).use(store)
const game = new Phaser.Game({
  width: 480,
  height: 480,
})

createPhavuerApp(game, vueApp)
