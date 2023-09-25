<template>
    <div class="sub page">
        <div class="sub_wrap">
            <div class="prdDetail">
                <div class="prdDetail_left">
                    <swiper
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        :autoplay="{
                            delay: 3000,
                        }"
                        :loop="true"
                        :modules="[EffectFade]"
                        effect="fade"
                    >
                        <swiper-slide v-for="(el, prdSlide) in prdSlide" :key="prdSlide">
                            <a href="#n">
                                <img :src="el.img" :alt="el.alt">
                            </a>
                        </swiper-slide>
                    </swiper>
                    <swiper
                        @swiper="setThumbsSwiper"
                        :slides-per-view="4"
                        :space-between="10"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        class="prdDetail_thumb"
                    >
                        <swiper-slide v-for="(el, prdSlide) in prdSlide" :key="prdSlide">
                            <a href="#n">
                                <img :src="el.img" :alt="el.alt">
                            </a>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="prdDetail_right"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper';
// import { Autoplay, EffectFade } from 'swiper/modules';
export default {
    name: 'ProductDetail',
    components: {
        Swiper,
        SwiperSlide,
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
            EffectFade,
            // modules: [Autoplay, EffectFade]
        }
    },
    data: () => ({
        prdSlide: [
            {
                img: require("@/assets/images/common/pd_slide01.jpg"),
                alt: "상품 상세 슬라이드 이미지1"
            },
            {
                img: require("@/assets/images/common/pd_slide02.jpg"),
                alt: "상품 상세 슬라이드 이미지2"
            },
            {
                img: require("@/assets/images/common/pd_slide03.jpg"),
                alt: "상품 상세 슬라이드 이미지3"
            },
            {
                img: require("@/assets/images/common/pd_slide04.jpg"),
                alt: "상품 상세 슬라이드 이미지4"
            },
            {
                img: require("@/assets/images/common/pd_slide05.jpg"),
                alt: "상품 상세 슬라이드 이미지5"
            },
        ]
    }),

    methods: {
        
    },

    mounted() {
        
    },
}
</script>
