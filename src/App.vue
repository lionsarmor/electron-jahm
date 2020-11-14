<template>
<div>
    <div class="dragbar titlebar overflow">
        <span class="dragbar-button">
            <button id="close" class="focus:outline-none menu-button" @click="close"><img id="close-btn" src="./assets/img/cancel.png"></button>
        </span>
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
</div>
</template>

<script>
import './js/default.js'

export default {
    name: 'App',
    components: {

    },
    data() {
        return {}
    },
    methods: {

    },
}
</script>
