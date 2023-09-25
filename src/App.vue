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
        // search open
        let search = document.querySelector('#search');
        let html = document.querySelector('html');
        let dim = document.querySelector('.dim')
        search.addEventListener('click', function() {
            html.classList.toggle('scrollFix')
            dim.classList.toggle('on');
        })

        // main, sub detect header 
        window.addEventListener('load', function() {
            console.log("페이지 로드 시 출력")
            let page = document.querySelector('.page');
            let subHeader = page.parentNode.previousElementSibling;
            if(page.classList.contains('main')) {
                console.log("메인 페이지");
            } else {
                console.log("서브 페이지");
                subHeader.classList.add('subHeader')
            }
        })
    }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>