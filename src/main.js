import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let app = createApp(App);

app.config.globalProperties.axios = axios;

app.use(store).mount('#app');
