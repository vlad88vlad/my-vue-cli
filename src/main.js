import Vue from 'vue'
import VueResource from 'vue-resource';

import App from './App'
import router from './router'

import VueMaterial from 'vue-material'

import './assets/css/fonts-matirial.css'
import './assets/css/roboto.css'
import 'vue-material/dist/vue-material.css'
import './assets/css/css.css'

import VueCookies from 'vue-cookies'

import Autocomplete from 'v-autocomplete'
import 'v-autocomplete/dist/v-autocomplete.css'
import vueTopprogress from 'vue-top-progress'

Vue.use(vueTopprogress)

Vue.use(Autocomplete)
Vue.use(VueMaterial);
Vue.use(VueCookies)


// Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.directive('title', {
    inserted: (el, binding) => document.title = binding.value,
    update: (el, binding) => document.title = binding.value
})

new Vue({


  el: '#app',
  router,
  data: {
      title: 'This will be the title'

  },
  template: '<App/>',
  components: {
    App
  },
  methods: {
  }
})
