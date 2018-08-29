import { Pie } from 'vue-chartjs'
// import DefaultOptions from '../DefaultOptions'

export default Pie.extend({
  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {

      }
    }
  },


})
