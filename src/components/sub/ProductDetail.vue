<template>
    <div class="sub page">
        <div class="sub_wrap">
            <div class="prdDetail">
                <div class="prdDetail_left">
                    <swiper
                        :loop="true"
                        :modules="modules"
                        :navigation="true"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false,
                        }"
                        :effect="'fade'"
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
                <div class="prdDetail_right">
                    <div class="prdDetail_brand">
                        <h3>ORGA</h3>
                        <button type="button"><span class="blind">공유하기 버튼</span></button>
                    </div>
                    <strong class="prdDetail_name">[2입기획] 고소한 손맛 두부</strong>
                    <span class="prdDetail_comp">국산콩으로 만든 손맛 두부</span>
                    <div class="prdDetail_price">
                        <em class="prdDetail_price_sale">2,900 <span>원</span></em>
                        <em class="prdDetail_price_normal">3,600</em>
                        <em class="prdDetail_price_per">19%</em>
                    </div>
                    <p class="prdDetail_evt">
                        네이버 페이<br>1만원 이상 생애 첫 결제 시, 1천원 캐시백(1인 1회 한정)
                    </p>
                    <div class="prdDetail_rdo">
                        <p>COLOR</p>
                        <div class="prdDetail_rdo_box">
                            <div class="rdo color_rdo" v-for="(el, rdo) in rdo1" :key="rdo">
                                <input type="radio" :id="el.id" name="rdo1">
                                <label :for="el.for">{{ el.label }}</label>
                            </div>
                        </div>
                        <span>[필수] 옵션을 선택해 주세요</span>
                    </div>
                    <div class="prdDetail_rdo">
                        <p>SIZE</p>
                        <div class="prdDetail_rdo_box">
                            <div class="rdo size_rdo" v-for="(el, rdo) in rdo2" :key="rdo">
                                <input type="radio" :id="el.id" name="rdo2" :disabled="el.disabled">
                                <label :for="el.for">{{ el.label }}</label>
                            </div>
                        </div>
                        <span>[필수] 옵션을 선택해 주세요</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref }  from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import { Autoplay, Navigation, Thumbs, EffectFade } from 'swiper/modules'
export default {
    name: 'ProductDetail',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        let thumbsSwiper = ref(null);
        let setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        }

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [ Autoplay, Navigation, Thumbs, EffectFade],
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
        ],
        rdo1: [
            {
                id: 'rdo01-1',
                for: 'rdo01-1',
                label: '(10)WHITE'
            },
            {
                id: 'rdo01-2',
                for: 'rdo01-2',
                label: '(11)BLACK'
            },
            {
                id: 'rdo01-3',
                for: 'rdo01-3',
                label: '(12)RED'
            },
            {
                id: 'rdo01-4',
                for: 'rdo01-4',
                label: '(13)BLUE'
            },
            {
                id: 'rdo01-5',
                for: 'rdo01-5',
                label: '(14)YELLOW'
            },
            {
                id: 'rdo01-6',
                for: 'rdo01-6',
                label: '(15)PINK'
            },
            {
                id: 'rdo01-7',
                for: 'rdo01-7',
                label: '(16)NAVY'
            },
            {
                id: 'rdo01-8',
                for: 'rdo01-8',
                label: '(17)SKY BLUE'
            },
        ],
        rdo2: [
            {
                id: 'rdo02-1',
                for: 'rdo02-1',
                label: 'S(090)',
                disabled: true,
            },
            {
                id: 'rdo02-2',
                for: 'rdo02-2',
                label: 'M(095)',
                disabled: true,
            },
            {
                id: 'rdo02-3',
                for: 'rdo02-3',
                label: 'L(100)',
                disabled: true,
            },
            {
                id: 'rdo02-4',
                for: 'rdo02-4',
                label: 'XL(105)',
                disabled: true,
            },
            {
                id: 'rdo02-5',
                for: 'rdo02-5',
                label: 'XXL(110)',
                disabled: true,
            },
        ],
    }),

    methods: {
        
    },

    mounted() {
        let colorRdo = document.querySelectorAll('.color_rdo label');
        let sizeRdo = document.querySelectorAll('.size_rdo input');
        for(let i = 0; i < colorRdo.length; i++) {
            colorRdo[i].addEventListener('click', function() {
                sizeRdo[i].disabled = false;
            })
        }
    },
}
</script>
