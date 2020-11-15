<template>
<div class="bg overlay">
    <div class="dragbar titlebar overflow">
        <span class="dragbar-button">
            <button id="close" class="menu-button" @click="close">
                <img id="close-btn" src="./assets/img/cancel.png">
            </button>
        </span>
    </div>
    <div>
        <span class="jham-logo">
            <a>JHAM</a>
            <navbar class="nav-button" />
        </span>
    </div>
    <router-view />
</div>
</template>

<script>
import './js/default.js'
import navbar from "./components/navbar.vue";

export default {
    name: 'App',
    components: {
        navbar
    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>
