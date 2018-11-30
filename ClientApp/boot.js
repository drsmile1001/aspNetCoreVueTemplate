import "./css/site.css";
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@babel/polyfill";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "./components/TheApp/Layout.vue";
Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: "/", component: () => import("./components/Info/Info.vue"), name: "首頁" },
    { path: '/Counter', component: () => import("./components/TheCounter/TheCounter.vue"), name: "計數器" },
    { path: '/GetData', component: () => import("./components/GetData/GetData.vue"), name:"從伺服器取得資料" }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(App)
});
