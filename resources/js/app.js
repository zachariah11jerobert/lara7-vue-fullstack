require("./bootstrap");

window.Vue = require("vue");
import router from "./router";
import ViewUi from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUi);

Vue.component("mainapp", require("./components/mainapp.vue").default);

const app = new Vue({
    el: "#app",
    router,
});
