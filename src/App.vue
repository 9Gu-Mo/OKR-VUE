<template>
    <!-- header -->
    <Header />

    <!-- contents -->
    <main class="wrap">
        <router-view />
    </main>

    <!-- footer -->
    <Footer />

    <!-- popup -->
    <ModalPop @modalClose="popOpen=false" v-if="popOpen" />

    <!-- dim -->
    <div class="dim" :class="{active:isBind}"></div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import ModalPop from "@/components/layout/ModalPop.vue";

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        ModalPop
    },
    data: () => ({
        popOpen : false,
    }),

    mounted() {
        // 검색창 오픈
        let search = document.querySelector('#search');
        let html = document.querySelector('html');
        let dim = document.querySelector('.dim')
        search.addEventListener('click', function() {
            html.classList.toggle('scrollFix')
            dim.classList.toggle('on');
        })
    }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>