import "@/assets/style.css";
import App from "@/App.vue";
import { router } from "@/router";
import { createVaporApp, vaporInteropPlugin } from "vue";

createVaporApp(App)
  .use(vaporInteropPlugin)
  .use(router)
  .mount("#app");
