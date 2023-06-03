import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import firstPage from "./components/pages/myFirstVuePage";
import newRoutePage from "./components/pages/newRoutePage";
import hooksPage from './components/pages/basic/hooksPage';
import methodsPage from './components/pages/basic/methodsPage';

const routes = [
    {
        path: "/my-new-vue-route",
        component: firstPage,
    },
    {
        path: "/new-route",
        component: newRoutePage,
    },
    {
        path: '/hooks',
        component: hooksPage
    },
    {
        path: '/methods',
        component: methodsPage
    }
];

export default new Router({
    mode: "history",
    routes,
});
