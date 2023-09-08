<template>
    <div class="main">
        <div class="main_bn">
            <swiper
                :slides-per-view="1"
                :effect="'creative'"
                :creativeEffect="{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }"
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
            <div class="main_sec_inner">
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
        </div>
        <div class="main_sec">
            <h2 class="tit">WEEKLY RANKING</h2>
            <div class="main_sec_inner">
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
                                <div>
                                    <a href="#n">
                                        <img :src="item.img" alt="">
                                    </a>
                                    <div class="gd_list_desc">
                                        <div class="gd_list_name">
                                            <strong>{{ item.name }}</strong>
                                            <button type="button" @click="on" class="gd_list_name_like" :class="{on:isBind}"><span>찜하기</span></button>
                                        </div>
                                        <div class="gd_list_pri">
                                            <p class="gd_list_pri_sale">{{ item.sale }}</p>
                                            <p class="gd_list_pri_price">{{ item.price }}</p>
                                            <p class="gd_list_pri_disc">{{ item.discount }}</p>
                                        </div>
                                        <p class="gd_list_rv">리뷰 {{ item.review }}<span>건</span></p>
                                    </div>
                                </div>
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
        <div class="main_sec">
            <h2 class="tit">EXHIBITION</h2>
            <div class="main_sec_inner">
                <div class="attach">
                    <div class="attach_img">
                        <a href="#">
                            <span class="blind">기획전 이미지</span>
                        </a>
                    </div>
                    <div class="attach_txt" data-aos="fade-down" data-aos-duration="700">
                        <p>
                            Our design is different.<br>
                            Meet high-quality skin Design Bloom.
                        </p>
                        <span>
                            A special way to spend each day moody and chic.<br>
                            Even if you do not decorate, it is a skin with a special atmosphere.<br>
                            There are many simple skins, but special ones are rare.<br>
                            You can enjoy discounts that can be purchased right now.
                        </span>
                        <a href="#n">view more</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_sec">
            <h2 class="tit">review</h2>
            <div class="main_sec_inner">
                <ul class="main_rv">
                    <li v-for="(el, review) in rv_list" :key="review">
                        <a href="#n">
                            <div class="main_rv_img">
                                <div :style="{backgroundImage: 'url(' + el.rvImg + ')'}">
                                    <span>리뷰 이미지</span>
                                </div>
                            </div>
                            <div class="main_rv_con">
                                <div class="tit">
                                    <div class="tit_left">
                                        <div class="pf" :style="{backgroundImage: 'url(' + el.pfImg + ')'}"><span>사용자 프로필 이미지</span></div>
                                    </div>
                                    <div class="tit_right">
                                        <strong>{{el.goodsTit}}</strong>
                                        <div class="grade"></div>
                                    </div>
                                </div>
                                <div class="cont">
                                    <strong>{{el.rvTit}}</strong>
                                    <p>{{el.rvCon}}</p>
                                </div>
                                <div class="info">
                                    <span>{{el.userName}}</span>
                                    <p>{{el.userDate}}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/vue';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
    AOS.init();
})

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
            modules: [Pagination],
            modules: [EffectCreative]
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
                img: require("@/assets/images/main/main_tab01.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab02.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab03.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab01.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab02.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab03.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab02.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
            },
            {
                img: require("@/assets/images/main/main_tab03.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5"
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
        ],
        rv_list: [
            {
                rvImg: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                pfImg: require("/src/assets/images/common/ico_profile.png"),
                goodsTit: "상품명 1줄 말줄임상품명 1줄 말줄임상품",
                rvTit: "다른데보다 저렴하고 배송이 빨라요 ㅎㅎㅎㅎㅎ",
                rvCon: "많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사",
                userName: "구*모",
                userDate: "2022.08.16"
            },
            {
                rvImg: require("/src/assets/images/main/main_tab03.jpg"),
                pfImg: require("/src/assets/images/common/ico_profile.png"),
                goodsTit: "상품명 1줄 말줄임상품명 1줄 말줄임상품상품명 1줄 말줄임상품명 1줄 말줄임상품상품명 1줄 말줄임상품명 1줄 말줄임상품",
                rvTit: "다른데보다 저렴하고 배송이 빨라요 ㅎㅎㅎㅎㅎ",
                rvCon: "많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다많이 저렴해져서 부담없이 구매했습니다 가격대비 성능이 진짜 혜자네요 헬스할때 편해서 좋아요 재구매의사 많이 저렴해져서 부담없이 구매했습니다",
                userName: "구*모",
                userDate: "2022.08.16"
            },
        ]
    }),
    methods: {
        on() {
            this.isBind = !this.isBind
        }
    },

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
    }
}
</script>