<template>
<div class="main-text flex flex-wrap overflow-hidden">
    <div class="px-8 w-full overflow-hidden">
        <quick-search />
    </div>
    <div class="my-8 px-8 w-full overflow-hidden">
        <quick-help />
    </div>
    <div class="my-8 px-8 w-full overflow-hidden">
        <create-ticket />
    </div>
</div>
</template>

<script>
import quickSearch from '../components/home/quickSearch.vue'
import quickHelp from '../components/home/quickHelp.vue'
import createTicket from '../components/home/createTicket.vue'

export default {
    name: 'Home',
    components: {
        quickSearch,
        quickHelp,
        createTicket
    }
}
</script>
