import Vue from 'vue'
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-localstorage'

import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'

import './assets/css/fonts-matirial.css'
import './assets/css/material-cards.css'
import './assets/css/roboto.css'
import 'vue-material/dist/vue-material.css'


import './assets/css/css.css'

import './directives/directives.js'

Vue.use(VueMaterial);

Vue.use(VueResource);
Vue.use(VueLocalStorage);

new Vue({


  el: '#app',
  router,
  data: {
      title: 'This will be the title',
      baseUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8008',
  },
  template: '<App/>',
  components: {
    App
  },
  methods: {
  }
})
