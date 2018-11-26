<template>
    <div>
        <transition>
            <div class="top-progress" :style="barStyle" >
                <div class="peg" :style="pegStyle">
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'vueTopprogress',

        data() {
            return {
            }
        },

        props: {
            progress:{
                type: Number,
                default: 0
            },
            speed: {
                type: Number,
                default: 350
            },

            barColor: {
                type: String,
                default: '#73AF55'
            },




            easing: {
                type: String,
                default: 'linear'
            },

            height: {
                type: Number,
                default: 3
            },



            zIndex: {
                type: Number,
                default: 9999
            }
        },

        computed: {
            barStyle() {
                return {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    width: `${this.progress}%`,
                    height: `${this.height}px`,
                    transition: `all ${this.speed}ms ${this.easing}`,
                    opacity: `${this.opacity}`,
                    zIndex: `${this.zIndex}`
                }
            },

            pegStyle() {
                return {
                    display: 'block',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '100%',
                    height: '4px',
                    background:this.barColor,
                    opacity: this.progress ? '1' : '0',

                }
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style>
    .top-progress{
        height: 4px;
    }
</style>
