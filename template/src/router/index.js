import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

Vue.use(Router)

export default new Router({
    // mode: 'history',

    routes: [

        {
            path: '/',
            name: 'home',
            component: Home,
            // beforeEnter: (to, from, next) => {
            //     if (!VueCookies.get("token") || VueCookies.get("token") === 'null' || VueCookies.get("token") === '') {
            //         next('login');
            //     } else {
            //         next()
            //     }
            // }
        },
        {
            path:'*',
            redirect:"/"
        }


    ]
})
