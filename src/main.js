import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@popperjs/core";

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import router from "./router";
app.use(router);

import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
