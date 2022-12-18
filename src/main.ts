import { createApp } from "vue";
import { createPinia } from "pinia";
import 'tdesign-vue-next/es/style/index.css';
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import store from './stores'
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store);
app.mount("#app");
