import "./assets/main.css";
import "./assets/tinymce.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";

const app = createApp(App);
const head = createHead();

app.use(router);

app.use(store);

app.use(head);

app.mount("#app");
