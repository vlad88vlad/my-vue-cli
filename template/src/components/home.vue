<template>
    <div>
        <top-progress :progress="loader.progress" :bar-color="loader.color" v-if="loader.show">
        </top-progress>

        <md-empty-state
                md-icon="call_to_action"
                md-label="vue cli">
        </md-empty-state>


        <h2>Material Input</h2>

        <div class="test-input">
            <div>
                <material-input type="text" v-model="test" :isValid="testValid" style="width: 300px"
                                :validMsg="testValidMsg" label="text"/>
                <md-button class="md-raised md-primary" @click="testInput"> test it</md-button>
            </div>
            <div class="test-info">
                <div>
                    <ul>
                        <li>text required</li>
                        <li>text.length > 2</li>
                        <li>only uppercase later</li>
                    </ul>
                </div>

            </div>

        </div>


        <h2>Top progress</h2>
        <div class="test-top-progress">
            <md-button class="md-raised md-primary" @click="startProgress"> start</md-button>
            <md-button class="md-raised md-success" @click="doneProgress"> done</md-button>
            <md-button class="md-raised md-accent" @click="failProgress"> fail</md-button>
        </div>
        <div class="clock">
            <div class="arrow_second" ref="second"></div>
            <div class="arrow_minute" ref="minutes"></div>
            <div class="arrow_hour" ref="hour"></div>
        </div>

        <h2>Call Alert</h2>

        <div style="text-align: center">
            <md-button class="md-raised md-primary" @click="callAlert">call</md-button>
            <md-button class="md-raised md-primary" @click="callAlert" v-disable="true">call</md-button>

        </div>

        <h2>Call Popup Event</h2>

        <div style="text-align: center">
            <md-button class="md-raised md-primary" @click="callPopupEvent(true,true)">email</md-button>
            <md-button class="md-raised md-success" @click="callPopupEvent(false,true)">success</md-button>
            <md-button class="md-raised md-accent" @click="callPopupEvent(false,false)">error</md-button>
            <popup-event v-if="popupEventParams.show" text="test event" :isEmail="popupEventParams.isEmail"
                         :status="popupEventParams.status">
                <md-button class="md-raised md-success" @click="closePopupEvent">close</md-button>


            </popup-event>
        </div>
        <div class="container">

            <alert v-for="(alert,index) in alerts" :style="'top:'+ (((index)) *50) +'px'" :type="alert.type"
                   :withCloseBtn="true">
                <span> {{alert.text}} </span>
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


    import Popup from './custom-components/popup.vue'
    import alert from './custom-components/alert.vue'
    import TopProgress from './custom-components/top-progress.vue'
    import PopupEvent from './custom-components/popup-event.vue'
    import MaterialInput from './custom-components/material-input.vue'
    import DonutChart from './custom-components/vuestic-chart/chart-types/DonutChart'
    import LineChart from './custom-components/vuestic-chart/chart-types/LineChart'
    import BubbleChart from './custom-components/vuestic-chart/chart-types/BubbleChart'

    export default {

        components: {Popup, alert, DonutChart, LineChart, BubbleChart, MaterialInput, TopProgress, PopupEvent},
        name: 'home',
        data() {
            return {
                test: '',
                popupEventParams: {
                    show: false,
                    isEmail: false,
                    status: false
                },
                testValid: true,
                testValidMsg: '',
                loader: {
                    progress: 0,
                    timeId: null,
                    show: false,
                    color: '#73AF55'
                },
                popupShow: false,
                post: false,
                showAlert: false,
                showChart: false,
                alerts: [],
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
        methods: {
            testInput() {
                if (!this.test) {
                    this.testValid = false;
                    this.testValidMsg = 'test required';
                    return
                }
                if (this.test.length < 2) {
                    this.testValid = false;
                    this.testValidMsg = 'test must be at least 8 characters long';
                    return
                }
                if (!(/[A-Z]/.test(this.test))) {
                    this.testValid = false;
                    this.testValidMsg = 'only uppercase later';
                    return
                }


            },
            modalClose(evt) {
                this.popupShow = evt;
            },
            progress(status) {
                let n = 0;
                this.loader.color = '#73AF55';
                clearTimeout(this.loader.timeId);
                if (status === 'start') {
                    this.loader.show = true;
                    this.loader.progress = 1;
                    this.loader.timeId = setInterval(() => {
                        n += 1;
                        this.loader.progress += 3 / n ** (1 / 2);
                        if (this.loader.progress > 90) {
                            clearTimeout(this.loader.timeId);
                        }
                    }, 100)
                } else if (status === 'done') {
                    setTimeout(() => {
                        this.loader.show = false
                    }, 1000);
                    this.loader.progress = 100
                } else {
                    setTimeout(() => {
                        this.loader.show = false
                    }, 1000);
                    this.loader.progress = 100;
                    this.loader.color = '#ff0300'
                }
            },
            callPopupEvent(isEmail, status) {
                this.popupEventParams.show = true;
                this.popupEventParams.isEmail = isEmail;
                this.popupEventParams.status = status;
            },
            closePopupEvent() {
                this.popupEventParams.show = false;
                this.popupEventParams.isEmail = false;
                this.popupEventParams.status = false;
            },
            callAlert() {
                this.showAlert = true;
                let temp = Math.floor(Math.random() * 1000);
                this.alerts.push({
                    showAlert: true,
                    text: `success ${temp}`,
                });
                let length = this.alerts.length;
                if (temp < 250) {
                    this.alerts[length - 1].type = 'success';
                } else if (temp < 500) {
                    this.alerts[length - 1].type = 'warning';
                } else if (temp < 750) {
                    this.alerts[length - 1].type = 'danger';
                } else {
                    this.alerts[length - 1].type = 'info';
                }
                setTimeout(() => {
                    this.alerts.splice(0, 1)

                }, 5000)
            },
            startProgress() {
                this.progress('start')
            },
            doneProgress() {
                this.progress('done')
            },
            failProgress() {
                this.progress('fail')

            }

        },
        mounted() {
            let secondArrow = this.$refs.second;
            let minutesArrow = this.$refs.minutes;
            let hourArrow = this.$refs.hour;
            setInterval(() => {
                let date = new Date()
                let second = date.getSeconds();
                let minute = date.getMinutes();
                let hour = date.getHours();
                secondArrow.style.transform = `rotate(${90 + second * 6}deg)`
                minutesArrow.style.transform = `rotate(${90 + minute * 6}deg)`
                hourArrow.style.transform = `rotate(${90 + hour * 30}deg)`
            }, 1000);

        },
        computed: {},
        watch: {
            test() {
                this.testValid = true;
            },
        },
        created() {}


    }
</script>

<style scoped>
    .clock {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        border-radius: 100%;
        width: 200px;
        height: 200px;
        margin: 5px;
        background: #fff;
        border: 2px solid;

    }

    .arrow_second, .arrow_minute, .arrow_hour {
        transform: rotate(90deg);
        transform-origin: right;

    }

    .arrow_second {
        z-index: 1000;
        width: 90px;
        margin-left: 10px;
        border: 0.5px solid red;

    }

    .arrow_minute {
        z-index: 100;

        width: 90px;
        margin-left: -90px;
        border: 1px solid;

    }

    .arrow_hour {
        z-index: 100;

        width: 80px;
        margin-left: -80px;
        border: 1px solid;

    }

    @keyframes arrwos {
        from {
            transform: rotate(90deg);
        }
        to {
            transform: rotate(450deg);
        }
    }



    .test-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .test-top-progress {
        width: 100%;
        display: flex;
        justify-content: center;

    }

    .test-info {
        display: inherit;
        flex: 1;
        justify-content: center;

    }

    .test-info > div {
        width: 400px;

    }

    .test-input > div:first-child {
        display: inherit;
        flex-wrap: wrap;
        justify-content: center;

    }

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
