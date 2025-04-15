import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
import router from '../src/router/index' 
createApp(App).use(router).mount('#app')
