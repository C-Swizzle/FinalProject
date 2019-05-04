import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from "../components/About";
import Homepage from "../components/Homepage";
const Home = { template: '<div>home</div>' }
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/home",
      name:"Home",
      component: Home
    },
    {
      path: "/about",
      name:"About",
      component:About
    },
    {
      path:"/homepage",
      name:"Homepage",
      component:Homepage
    }
  ]
})
