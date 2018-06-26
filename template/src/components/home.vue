<template>
    <div>

        <md-empty-state
                md-icon="call_to_action"
                md-label="vue cli"
                md-description="It's my first custom vue cli.">
        </md-empty-state>


        <div class="container">


            <alert type="success" :withCloseBtn="true" v-if="showAlert">
                <md-icon class="md-success">check</md-icon>
                <span> test </span>
            </alert>


            <template v-if="showChart">

                <donut-chart :data="donutChartData"></donut-chart>
                <line-chart :data="donutChartData"></line-chart>
                <bubble-chart :data="bubbleChartData"></bubble-chart>

            </template>

        </div>

        <transition name="fade">
            <popup @modal="modalClose" v-show="popupShow" :active="popupShow"></popup>
        </transition>


        <md-speed-dial class="dial bottomPosition">
            <md-speed-dial-target>
                <md-icon>add</md-icon>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <md-button class="md-icon-button" @click="popupShow = !popupShow">
                    <md-icon>view_carousel</md-icon>
                </md-button>

                <md-button class="md-icon-button" @click="showChart = !showChart ;">
                    <md-icon>pie_chart</md-icon>

                </md-button>
                <md-button class="md-icon-button" @click="callAlert();">
                    <md-icon>notification_important</md-icon>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>

    </div>
</template>

<script>
    import router from '.././router'
    import Popup from './customComponents/popup.vue'
    import alert from './customComponents/alert.vue'
    import DonutChart from './customComponents/vuestic-chart/chart-types/DonutChart'
    import LineChart from './customComponents/vuestic-chart/chart-types/LineChart'
    import BubbleChart from './customComponents/vuestic-chart/chart-types/BubbleChart'

    export default {

        components: {Popup, alert, DonutChart, LineChart, BubbleChart},
        name: 'home',
        data() {
            return {
                popupShow: false,
                post: false,
                showAlert: false,
                showChart: false,
                donutChartData: {
                    labels: ['html', 'css', 'js'],
                    datasets: [{
                        label: 'Population (millions)',
                        backgroundColor: ['#E3A233', '#2E23DA', '#FFE83B'],
                        data: [100, 200, 300]
                    }]
                },
                bubbleChartData: {
                    datasets: [{
                        label: 'js',
                        data: [{
                            x: 6,
                            y: 6,
                            r: 10
                        }],
                        backgroundColor: "#FFE83B",
                        hoverBackgroundColor: "#ffe100"
                    },
                        {
                            label: 'css',
                            data: [{
                                x: 4,
                                y: 5,
                                r: 10
                            }],
                            backgroundColor: "#2E23DA",
                            hoverBackgroundColor: "#0000da"
                        },
                        {
                            label: 'html',
                            data: [{
                                x: 2,
                                y: 3,
                                r: 10
                            }],
                            backgroundColor: "#E3A233",
                            hoverBackgroundColor: "#e3a800"
                        }]
                }
            }
        },
        router,
        methods: {
            modalClose(evt) {
                this.popupShow = evt;
            },
            callAlert() {
                this.showAlert = true;
                setTimeout(() => {
                    this.showAlert = false

                }, 1500)
            }

        },
        mounted() {

        },
        computed: {},
        watch: {},
        created() {
        }


    }
</script>

<style scoped>
    .dial {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 0 20px 20px 0;
    }

    .container {
        display: flex; /* or inline-flex */
        flex-direction: row;
        flex-wrap: wrap;
        /*justify-conten:center;*/
        justify-content: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .9s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
