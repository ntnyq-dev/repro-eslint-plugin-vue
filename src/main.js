import Vue from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

new Vue({
  pinia,
  ...App
}).$mount('#app')
