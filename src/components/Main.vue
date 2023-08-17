<template>
    <div class="main">
        <div class="main_bn">
            <swiper
                :slides-per-view="1"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide v-for="(el, slide) in mainSlide" :key="slide">
                    <a href="#n">
                        <img :src="el.img" alt="">
                    </a>
                </swiper-slide>
            </swiper>
        </div>
        <div class="main_sec main_goods">
            <h2 class="tit">NEW</h2>
            <swiper 
                :slides-per-view="3"
                :space-between="50"
                :loop="true"
                @swiper="onSwiper" 
                @slideChange="onSlideChange"
            >
                <swiper-slide v-for="(el, slide) in goodsSlide" :key="slide" class="gd_list">
                    <a href="#n">
                        <img :src="el.img" alt="">
                    </a>
                    <div class="gd_list_desc">
                        <div class="gd_list_name">
                            <strong>{{ el.name }}</strong>
                            <button type="button" @click="on" class="gd_list_name_like" :class="{on:isBind}"><span>찜하기</span></button>
                        </div>
                        <div class="gd_list_pri">
                            <p class="gd_list_pri_sale">{{ el.sale }}</p>
                            <p class="gd_list_pri_price">{{ el.price }}</p>
                            <p class="gd_list_pri_disc">{{ el.discount }}</p>
                        </div>
                        <p class="gd_list_rv">리뷰 {{ el.review }}<span>건</span></p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="main_sec">
            <h2 class="tit">WEEKLY RANKING</h2>
            <div class="gd_tab">
                <ul class="gd_tab_btn">
                    <li v-for="(tab, index) in tabBtn" :key="index" @click.prevent="currentTab = index" :class="{'active' : currentTab === index}">
                        <a href="#n">{{ tab.name }}</a>
                    </li>
                </ul>
                <div class="gd_tab_con">
                    <ul v-if="currentTab === 0">
                        <li v-for="(item, index) in 1" :key="index" class="gd_tab_con_slide">
                            <swiper
                                :modules="modules"
                                :slides-per-view="1"
                                :loop="true"
                                :pagination="{ clickable: true }"
                                @swiper="onSwiper" 
                                @slideChange="onSlideChange"
                            >
                                <swiper-slide v-for="(el, slide) in tabSlide1" :key="slide">
                                    <a href="#n">
                                        <img :src="el.img" alt="">
                                    </a>
                                    <div class="gd_list_desc">
                                        <div class="gd_list_name">
                                            <strong>{{ el.name }}</strong>
                                            <button type="button" @click="on" class="gd_list_name_like" :class="{on:isBind}"><span>찜하기</span></button>
                                        </div>
                                        <div class="gd_list_pri">
                                            <p class="gd_list_pri_sale">{{ el.sale }}</p>
                                            <p class="gd_list_pri_price">{{ el.price }}</p>
                                            <p class="gd_list_pri_disc">{{ el.discount }}</p>
                                        </div>
                                        <p class="gd_list_rv">리뷰 {{ el.review }}<span>건</span></p>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </li>
                        <li v-for="(item, index) in tabCon" :key="index">
                            <p style="color: red;">테스트1</p>
                        </li>
                    </ul>
                    <ul v-if="currentTab === 1">
                        <li v-for="(item, index) in tabCon" :key="index">
                            <p>{{ item.name }}</p>
                        </li>
                    </ul>
                    <ul v-if="currentTab === 2">
                        <li v-for="(item, index) in tabCon" :key="index">
                            <p>{{ item.name }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'

export default {
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
            modules: [Pagination]
        }
    },
    data: () => ({
        isBind: false,
        currentTab: 0,
        mainSlide: [
            {
                img: require("@/assets/images/main/main_bn01.jpg")
            },
            {
                img: require("@/assets/images/main/main_bn02.jpg")
            },
            {
                img: require("@/assets/images/main/main_bn03.jpg")
            },
        ],
        goodsSlide: [
            {
                img: require("@/assets/images/main/main_goodSilde01.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_goodSilde02.jpg"),
                name: "[남녀공용]배색 윈드브레이커2",
                sale: "29,000",
                price: "69,000",
                discount: "15%",
                review: "15"
            },
            {
                img: require("@/assets/images/main/main_goodSilde03.jpg"),
                name: "[남녀공용]배색 윈드브레이커3",
                sale: "59,000",
                price: "169,000",
                discount: "12%",
                review: "25",
            },
            {
                img: require("@/assets/images/main/main_goodSilde01.jpg"),
                name: "[남녀공용]배색 윈드브레이커4",
                sale: "139,000",
                price: "629,000",
                discount: "80%",
                review: "35"
            },
            {
                img: require("@/assets/images/main/main_goodSilde02.jpg"),
                name: "[남녀공용]배색 윈드브레이커5",
                sale: "9,000",
                price: "19,000",
                discount: "50%",
                review: "45"
            },
            {
                img: require("@/assets/images/main/main_goodSilde03.jpg"),
                name: "[남녀공용]배색 윈드브레이커6",
                sale: "329,000",
                price: "399,000",
                discount: "30%",
                review: "55"
            },
        ],
        swiperOption: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
        },
        tabBtn: [
            {
                name: "WOMEN"
            },
            {
                name: "MEN"
            },
            {
                name: "KIDS"
            },
        ],
        tabCon: [
            {
                name: "내용1"
            },
            {
                name: "내용2"
            },
            {
                name: "내용3"
            },
        ],
        tabSlide1: [
            {
                img: require("@/assets/images/main/main_tabSlide01.jpg"),
                name: "[남녀공용]배색 윈드브레이커3",
                sale: "59,000",
                price: "169,000",
                discount: "12%",
                review: "25",
            },
            {
                img: require("@/assets/images/main/main_tabSlide02.jpg"),
                name: "[남녀공용]배색 윈드브레이커3",
                sale: "59,000",
                price: "169,000",
                discount: "12%",
                review: "25",
            },
            {
                img: require("@/assets/images/main/main_tabSlide03.jpg"),
                name: "[남녀공용]배색 윈드브레이커3",
                sale: "59,000",
                price: "169,000",
                discount: "12%",
                review: "25",
            },
            {
                img: require("@/assets/images/main/main_tabSlide04.jpg"),
                name: "[남녀공용]배색 윈드브레이커3",
                sale: "59,000",
                price: "169,000",
                discount: "12%",
                review: "25",
            },
        ]
    }),
    methods: {
        on() {
            this.isBind = !this.isBind
        }
    }
}
</script>