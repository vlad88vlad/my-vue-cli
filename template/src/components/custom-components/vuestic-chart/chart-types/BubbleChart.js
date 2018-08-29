import { Bubble } from 'vue-chartjs'

export default ({
    extends: Bubble,

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
                backgroundColor: ['#e3c74d', '#c02151', '#1453ff'],
                data: [3000, 6000, 1500]
            }]
        };
        this.renderChart(this.data, options)
    }


})
