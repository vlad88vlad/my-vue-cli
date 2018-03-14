<template>
    <div>

       home app
        <router-view></router-view>
    </div>
</template>

<script>


    import router from './router'


    export default {
        components: {},


        name: 'app',
        router,
        data() {
            return {
                title: 'Home',
                base_url: process.env.NODE_ENV === 'production' ? '' : 'http://damm.wireless.no:80/',
            }
        },
        mounted() {
        },
        methods: {



        },
        created() {

        }


    }
</script>

<style>

</style>
