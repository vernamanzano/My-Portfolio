
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Particles from "vue3-particles"

const app = createApp(App).use(Particles);

app.use(router)

app.mount('#app')
