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
        window.addEventListener('DOMContentLoaded', function() {
            console.log("app.vue 마운트 테스트")
        })

        // search open
        let searchBtn = document.querySelector('#search');
        let search = document.querySelector('.search');
        let html = document.querySelector('html');
        let dim = document.querySelector('.dim');
        let header = document.querySelector('.header');
        searchBtn.addEventListener('click', function() {
            html.classList.toggle('scrollFix')
            dim.classList.toggle('on');
            header.classList.toggle('active');
            search.classList.toggle('active');
        })

        // main, sub detect header 
        window.addEventListener('load', function() {
            console.log("페이지 로드 시 출력")
            let page = document.querySelector('.page');
            let subHeader = page.parentNode.previousElementSibling;
            if(page.classList.contains('main')) {
                console.log("메인 페이지");
            } else {
                subHeader.classList.add('subHeader')
                console.log("서브 페이지");
            }
        })
    },
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>