<template>
<div>
    <span>
        <h1 class="Quick-Search">Quick Search</h1>
    </span>
    <form action="/action_page.php">
        <input class="search-bar" style="margin-left:2vh;padding-left:34px;width:300px;" type="text" placeholder="Search among thousands of issues" name="search">
        <button type="submit"><img class="search-icon" src="../../assets/img/search.png">
        </button>
    </form>
    <div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
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
