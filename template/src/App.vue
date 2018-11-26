<template>
    <div class="wrapper">
        <div class="content">
            <header> My vue cli</header>
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
            return {}
        },
        mounted() {
        },
        methods: {},
        created() {
        }


    }
</script>
<style>

    :root {
        --header-height: 60px;
        --header-bg-color: #286090;
        --main-bg-color: #fafafa;
        --side-bg-color: #5a618e;
        --side-text-color-small: #454242;
        --side-text-color: #fff;
        --primary-color: #286090;
        --danger-color: #ff5733;
        --warning-color: #F8BB86;
        --success-color: #73AF55;
        --bg-color-card-admin: #b8b8b938;

    }

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    header {
        height: 60px;
        width: 100%;
        background: #1453ff;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #fff;
        font-size: 22px;
    }

    .md-success {
        background-color: #73AF55 !important;
        color: #fff !important;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
        flex: 1 0 auto;
    }

    h2 {
        text-align: center;
        color: #343434;
    }

    .footer {
        flex: 0 0 auto;
    }

    [data-tooltip] {
        position: relative;
        z-index: 2;
        cursor: pointer;
    }


</style>
