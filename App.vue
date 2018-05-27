<template>
    <div id="app">
        <transition>
            <router-view/>
        </transition>

    </div>
</template>


<script>
    import './assets/js/rem'
    export default {
        name: 'App'
    }
</script>

<style>

    .v-enter-to {
        opacity: 1;
    }

    .v-enter-active {
        transition: opacity .6s ease;
    }

    .v-leave {
        opacity: 1;
    }

    .v-leave-to {
        opacity: 0;
    }

    .v-leave-active {
        transition: opacity .6s ease;
    }

    html, body {
        background-color: #fff;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    * {
        margin: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
    }
</style>
