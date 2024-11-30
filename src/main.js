import { createPinia } from 'pinia'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// First step in using Pinia
createApp(App).use(createPinia()).mount('#app')