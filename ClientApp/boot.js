import "./css/site.css";
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@babel/polyfill";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Home from "./components/home/home.vue";
import App from "./components/app/app.vue";
Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: "/", component: Home, name: "首頁" },
    { path: '/counter', component: () => import("./components/counter/counter.vue"), name: "計數器" },
    { path: '/fetchdata', component: () => import("./components/fetchdata/fetchdata.vue"), name:"從伺服器取得資料" }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(App)
});
