<template>
    <header class="header" :class="{active:isBind}">
        <div class="hWrap">
            <div class="hLeft">
                <div class="hLogo">
                    <a href="#n"></a>
                </div>
                <nav class="gnb">
                    <ul>
                        <li v-for="(el, index) in nav" :key="index">
                            <a href="#n">{{ el }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="hRight">
                <ul>
                    <!-- <li v-for="(el, index) in icon" :key="index" :class="{ login: el.isLogin }">
                        <a href="#n" v-on:click="great"></a>
                    </li> -->
                    <li class="login">
                        <a href="#n"></a>
                    </li>
                    <li>
                        <a href="#n" id="search" @click="setBind"></a>
                        <div class="search" :class="{active:isBind}">
                            <div class="search_inner">
                                <h2 class="search_txt">고객님<br>무엇을 찾으시나요?</h2>
                                <div class="search_inpWrap">
                                    <input type="search" class="inp search_inp">
                                    <span data-placeholder="상품을 찾아보세요."></span>
                                </div>
                                <div class="search_con">
                                    <div class="search_keyword">
                                        <div class="search_keyword_wrap">
                                            <h3 class="search_tit">#인기 검색어</h3>
                                            <ul class="search_keyword_wrap_popular">
                                                <li v-for="(el, index) in pList" :key="index">
                                                    <a href="#n">{{ el }}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div class="search_keyword_wrap">
                                            <h3 class="search_tit">#최근 검색어</h3>
                                            <ul class="search_keyword_wrap_recent">
                                                <li v-for="(el, index) in rList" :key="index">
                                                    <span class="rank">{{ el.rank }}</span>
                                                    <a href="#n">{{ el.txt }}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="search_goods">
                                        <div class="search_goods_wrap">
                                            <h3 class="search_tit">#추천 상품</h3>
                                            <swiper
                                                :slides-per-view="3"
                                                :space-between="20"
                                                @swiper="onSwiper"
                                                @slideChange="onSlideChange"
                                            >
                                                <swiper-slide v-for="(el, sSlide) in searchSlide" :key="sSlide">
                                                    <a href="#n">
                                                        <img :src="el.img">
                                                        <div class="slide_hover">
                                                            <h3>{{ el.name }}</h3>
                                                            <p>{{ el.price }}</p>
                                                        </div>
                                                    </a>
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#n"></a>
                    </li>
                    <li>
                        <a href="#n"></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    name: 'Header',
    components: {
        Swiper,
        SwiperSlide,
    },
    data: () => ({
        isBind: false,
        // logo: require('@/assets/images/top_logo_pc_wh.png'),
        nav: [
            'best',
            'women',
            'men',
            'collaboration',
            'kids',
            '런칭 캘린더',
        ],
        icon: [
            {
                isLogin: true,
            },
        ],
        pList: [
            '#투팩',
            '#데님',
            '#반팔니트린넨',
            '#레이어드',
            '#반팔셔츠',
            '#쪼리',
            '#오감자',
            '#삼다수',
            '#글자수제한없음',
        ],
        rList: [
            {
                rank: "1",
                txt: "탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육탕수육"
            },
            {
                rank: "2",
                txt: "짜장면"
            },
            {
                rank: "3",
                txt: "깐풍기"
            },
            {
                rank: "4",
                txt: "양장피양장피양장피양장피양장피양장피양장피양장피양장피양장피양장피양장피양장피"
            },
            {
                rank: "5",
                txt: "군만두"
            },
        ],
        searchSlide: [
            {
                img: require("@/assets/images/common/main_reco01.jpg"),
                name: "상품명1",
                price: "15,000원"
            },
            {
                img: require("@/assets/images/common/main_reco02.jpg"),
                name: "상품명2",
                price: "25,000원"
            },
            {
                img: require("@/assets/images/common/main_reco01.jpg"),
                name: "상품명3",
                price: "35,000원"
            },
            {
                img: require("@/assets/images/common/main_reco02.jpg"),
                name: "상품명4",
                price: "45,000원"
            },
            {
                img: require("@/assets/images/common/main_reco01.jpg"),
                name: "상품명5",
                price: "55,000원"
            },
            {
                img: require("@/assets/images/common/main_reco02.jpg"),
                name: "상품명6",
                price: "65,000원"
            },
            {
                img: require("@/assets/images/common/main_reco01.jpg"),
                name: "상품명7",
                price: "75,000원"
            },
            {
                img: require("@/assets/images/common/main_reco02.jpg"),
                name: "상품명8",
                price: "85,000원"
            },
        ]
    }),

    methods: {
        setBind() {
            this.isBind = !this.isBind;
        } 
    },

    mounted() {
        
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
        }
    },
}
</script>