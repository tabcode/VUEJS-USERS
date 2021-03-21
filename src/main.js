import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import NewUser from "./components/NewUser.vue";
import Users from "./components/Users.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users,
    },
    {
      path: '/:func',
      name: 'NewUser',
      component: NewUser,
    }
  ]
})
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
