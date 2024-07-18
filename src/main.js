import '/src/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { plugin as vueTransitionsPlugin } from '@morev/vue-transitions';
import '@morev/vue-transitions/styles';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vueTransitionsPlugin({
    defaultProps: {
        duration: 2000,
    },
}))

app.mount('#app')
