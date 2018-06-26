import { HorizontalBar } from 'vue-chartjs'

export default HorizontalBar.extend({
  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {

      }
    }
  },


})
