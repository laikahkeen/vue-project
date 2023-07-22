import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@popperjs/core";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
