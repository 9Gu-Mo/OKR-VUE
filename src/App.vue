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
        // 헤더 특정 높이에서 클래스 추가
        window.addEventListener('scroll', function() {
            let scrollY = this.scrollY
            let mTop = document.querySelector('.main_goods').offsetTop - 100;
            let header = document.querySelector('.header');
            if (scrollY > mTop) {
                header.classList.add('active')
            } else {
                header.classList.remove('active')
            }
        })

        // 검색창 오픈
        let search = document.querySelector('#search');
        let body = document.querySelector('body');
        search.addEventListener('click', function() {
            if(search.classList.contains('active')) {
                body.classList.add('scrollFix')
            } else {
                body.classList.remove('scrollFix')
            }
        })
    }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>