import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './style.css';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$axios = axios;

app.use(pinia);
app.use(router);
app.mount('#app');
