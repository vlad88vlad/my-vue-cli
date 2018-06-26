<template>
    <div class="wrapper">

        <div class="content">
            <header > My vue cli</header>
            <router-view></router-view>
        </div>
        <div class="footer"></div>

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
        methods: {},
        created() {

        }


    }
</script>

<style>
    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    header{
        height: 60px;
        width: 100%;
        background: #1453ff;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #fff;
        font-size: 22px;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
        flex: 1 0 auto;
    }

    .footer {
        flex: 0 0 auto;
    }
</style>
