import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "task-manager-host/store";

const app = createApp(App);
app.use(pinia);
app.mount("#app");
