<template>
<div>
    <div>
        <h1 class="Create-Ticket">Create a Ticket</h1>
    </div>
    <div style="margin-left:3vh;margin-top:1vh;" class="rectangle-home">
        <p class="home-text home-text-margin">To create the ticket, we need to collect some information.</p>
        <span>
            <button class="home-button-started bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Get Started
                <img class="arrow" src="../../assets/img/arrow.svg">
            </button>
        </span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            suggestion: "recieving emails"
        };
    },
    methods: {

    },
    watch: {

    },
    mounted() {

    }
};
</script>
