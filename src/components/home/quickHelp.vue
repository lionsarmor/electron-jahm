<template>
<div>
    <div>
        <h1 class="Quick-Help">Quick Help</h1>
    </div>
    <div style="margin-left:3vh;margin-top:1vh;" class="rectangle-home">
        <p class="home-text home-text-margin">We think you're having issues <a class="jham-color">{{ suggestion }}</a> is this true?</p>
        <span>
            <button class="home-button-gray bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                No
            </button>
            <button class="home-button-gold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Yes
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
