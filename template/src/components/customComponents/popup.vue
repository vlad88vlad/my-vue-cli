<template>
    <div >


        <div tabindex="0" class="md-dialog-container md-theme-default" :class="{ active: 'md-active' }">

            <div class="md-dialog md-reference">
                <div class="md-dialog-title md-title"> Popup</div>
                <div class="md-dialog-content">
                    <h1>Example Popup</h1>

                </div>

                <div class="md-dialog-actions">
                    <md-button class="md-primary" @click="closeDialog()">Cancel</md-button>


                </div>
            </div>
            <div class="md-backdrop md-dialog-backdrop md-active"></div>
        </div>


    </div>

</template>

<script>


    export default {

        components: {},
        name: 'popup',
        props: ['active'],
        data() {
            return {
                type: 'text',
                type1: 'text'
            }
        },
        methods: {


            closeDialog() {
                this.$emit('modal', false);

            },


        },
        created() {

        },
        mounted() {


        },
        watch: {
            active() {
                if (this.active) {
//                    document.body.style.overflow = 'hidden';
                    document.body.style['overflow-y'] = 'hidden';


                } else {
//                    document.body.style.overflow = 'visible';
                    document.body.style['overflow-y'] = 'visible';

                }
            }
        },
        computed: {}


    }

</script>

<style>


    .md-dialog {
        background-color: #fff
    }

    .md-dialog-container {
        width: 100%;
        height: 100%;
        background: rgba(49, 48, 49, 0.2);
        position: fixed;
        top: 0;
        z-index: 1000;
        overflow: hidden;
    }


</style>
