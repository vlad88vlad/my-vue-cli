import { Doughnut } from 'vue-chartjs'
// import DefaultOptions from '../DefaultOptions'

export default ({
    extends: Doughnut,

    props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {

      }
    }
  },

  mounted () {
    let options ={
        labels: ['North America', 'South America', 'Australia'],
        datasets: [{
            label: 'Population (millions)',
            backgroundColor: ['#4ae387', '#c02151', '#1453ff'],
            data: [3000, 6000, 1500]
        }]
    };
    this.renderChart(this.data, options)
  }
})
