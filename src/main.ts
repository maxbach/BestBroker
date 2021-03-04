import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueGtag from "vue-gtag-next";


let app = createApp(App)

app.use(VueGtag, {
    property: {
        id: "G-P7PKPYD8VK"
    }
})

app.mount('#app')