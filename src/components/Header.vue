<template>
<header class="header">
    <div class="logo">
        <div class="logo__container">
            <img src="../assets/logo.png" alt="News app logo" class="logo__image" />
        </div>
        <h1>JHAM</h1>
    </div>
</header>
</template>

<script>
export default {
    name: "app-header",
};
</script>

<style>
.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    -webkit-app-region: drag;
    background-color: #141414;
    padding-right: 20vh;
}

.logo {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
}

.logo__container {
    width: 50px;
    height: 50px;
}

.logo__image {
    max-width: 100%;
    max-height: 100%;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    justify-content: space-between;
}
</style>
