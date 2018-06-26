import { Bar } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Bar.extend({
  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {

      }
    }
  },


})
