import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faHome,
  faEllipsis,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faHome, faEllipsis, faUsers);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
