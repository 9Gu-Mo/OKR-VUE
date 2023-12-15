<template>
    <div class="sub page">
        <div class="sub_wrap fl_dr_col">
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
                    <div class="prdDetail_purc">
                        <p class="prdDetail_purc_name">[2입기획] 고소한 손맛 두부</p>
                        <div class="prdDetail_purc_cnt">
                            <div class="prdDetail_purc_cnt_inner">
                                <button type="button" class="minus" @click="cntDown" disabled><span>감소</span></button>
                                <span>{{ cnt }}</span>
                                <button type="button" class="plus" @click="cntUp"><span>증가</span></button>
                            </div>
                            <span class="prdDetail_purc_cnt_sum">2,900</span>
                        </div>
                    </div>
                    <p class="prdDetail_order">주문금액 <span>2,900</span>원</p>
                    <div class="prdDetail_btn">
                        <a href="#n" class="line">장바구니</a>
                        <a href="#n" class="solid">바로구매</a>
                    </div>
                </div>
            </div>
            <div class="prdTab">
                <ul class="prdTab_btn">
                    <li v-for="(tab, index) in tabBtn" :key="index" @click.prevent="currentTab = index" :class="{'active' : currentTab === index}">{{ tab.name }}</li>
                </ul>
                <!-- 
                    v-for와 v-if는 동시에 사용 할 수 없음 
                    필요시, 레벨 분리 후 사용
                -->
                <!-- <div v-for="(tab, index) in tabCon" :key="index">
                    <div v-if="currentTab === index">
                        {{ tab.name }}
                    </div>
                </div> -->
                <!-- 상품정보 -->
                <div v-if="currentTab === 0">
                    <div class="prdTab_con prdTab_con_img">
                        <img :src="prdImg" alt="">
                    </div>
                </div>
                
                <!-- 구매정보 -->
                <div v-if="currentTab === 1">
                    <div class="prdTab_con">
                        <h2 class="prdTab_con_tit">상품번호</h2>
                        <span class="prdTab_con_serial">4795</span>

                        <h2 class="prdTab_con_tit prdTab_con_tit_under">구매정보</h2>
                        <p class="prdTab_con_subTit">상품정보제공고시</p>
                        <table class="prdTab_con_tbl">
                            <caption>상품정보제공고시</caption>
                            <colgroup>
                                <col style="width: 25%;">
                                <col>
                            </colgroup>
                            <tbody>
                                <tr v-for="(el, index) in tbl" :key="index">
                                    <th>{{ el.th }}</th>
                                    <td>{{ el.td }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- 상품후기 -->
                <div v-if="currentTab === 2"></div>
                
                <!-- 상품문의 -->
                <div v-if="currentTab === 3"></div>
                
                <!-- 배송/환불 -->
                <div v-if="currentTab === 4"></div>
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
        prdImg: require('@/assets/images/common/prd_ex.jpg'),
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
        cnt: 1,
        tabBtn: [
            {
                name: "상품정보"
            },
            {
                name: "구매정보"
            },
            {
                name: "상품후기"
            },
            {
                name: "상품문의"
            },
            {
                name: "배송/환불"
            },
        ],
        currentTab: 0,
        tbl: [
            {
                th: "제품명",
                td: "제품 포장 라벨 참조"
            },
            {
                th: "상품의 유형",
                td: "상의 아우터"
            },
            {
                th: "생산자 및 소재지(수입품의 경우 생산자, 수입자 및 제조국)",
                td: "(주) 맑은농산 | 경기도 남양주시 진접읍 내각1로 73번길 67-19"
            },
            {
                th: "원재료명 및 함량(농수산물의 원산지 표시에 관한 볍률에 따른 원산지 표시 포함)",
                td: "상세 참조"
            },
            {
                th: "영양성분(식품등의표시·광고에관한법률에 따른 영양성분 표시대상 식품에 한함)",
                td: "상세 참조"
            },
            {
                th: "유전자변형식품 여부",
                td: "해당 없음"
            },
            {
                th: "수입식품인 경우 수입신고 여부",
                td: "해당 없음"
            },
            {
                th: "소비자상담 관련 전화번호",
                td: "010-1234-5678"
            },
        ]
    }),

    methods: {
        cntUp: function() {
            let minus = document.querySelector('.minus');
            this.cnt++;
            if(this.cnt > 0) {
                minus.removeAttribute('disabled')
            }
        },
        cntDown: function() {
            let minus = document.querySelector('.minus');
            this.cnt--;
            if(this.cnt <= 1) {
                minus.setAttribute('disabled', true);
            } 
        },
        
    },

    mounted() {
        let colorRdo = document.querySelectorAll('.color_rdo label');
        let sizeRdo = document.querySelectorAll('.size_rdo input');
        for(let i = 0; i < colorRdo.length; i++) {
            colorRdo[i].addEventListener('click', function() {
                sizeRdo.forEach((element) => {
                    element.disabled = false;
                })
            })
        }
    },
}
</script>
