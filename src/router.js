import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home' // this is the import line to add
import about from '@/components/about'
import contact from '@/components/contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
  path: '/home',
  name: 'Home',
  component: home
},
 {
   path: '/about',
   name: 'About',
   component: about
 },
 {
   path: '/contact',
   name: 'Contact',
   component: contact
}
  ]
})
