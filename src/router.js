import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home' // this is the import line to add
import about from '@/components/about'
import contact from '@/components/contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
  path: '/',
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
