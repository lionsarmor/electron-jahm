<template>
<nav>
    <div>
        <button class="mr-2" aria-label="Open Menu" @click="drawer">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-0" leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
    </transition>
    <aside class=" bg-transparent transform top-0 right-0 w-72 bg-jhamNav fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? '-translate-x-0' : 'translate-x-full'">
        <!--  <div class="test">
            <router-link @click="drawer" class="test" to="/about">About</router-link>
        </div>-->
    </aside>
</nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        drawer() {
            this.isOpen = !this.isOpen;
        }
    },
    watch: {
        isOpen: {
            immediate: true,
            handler(isOpen) {
                if (process.client) {
                    if (isOpen) document.body.style.setProperty("overflow", "hidden");
                    else document.body.style.removeProperty("overflow");
                }
            }
        }
    },
    mounted() {
        document.addEventListener("keydown", e => {
            if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    }
};
</script>
