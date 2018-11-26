import {Line} from 'vue-chartjs'
// import DefaultOptions from '../DefaultOptions'

export default ({
    extends: Line,

    props: ['data', 'options'],

    data() {
        return {
            defaultOptions: {}
        }
    },

    mounted() {
        let options = {
            elements: {
                line: {
                    // tension: 1, // disables bezier curves
                }
            },
            scales: {
                yAxes: [{

                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        };
        this.renderChart(this.data, options)
    }
})
