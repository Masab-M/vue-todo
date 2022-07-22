import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'
import store from  './store/index.js'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
