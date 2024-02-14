<template>
    <div class="sub page">
        <div class="sub_wrap gdsList">
            <div class="gdsList_filter">
                <h3>FILTER</h3>
                <ul class="gdsList_filter_wrap">
                    <li class="gdsList_filter_item js_filter-toggle" v-for="(el, index) in list" :key="index" :class="{ color: el.chkColor, on:isOpen }">
                        <p class="gdsList_filter_tit">{{ el.tit }}</p>
                        <div class="gdsList_filter_con">
                            <ul>
                                <li v-for="(el2, index) in el.list2" :key="index">
                                    <input type="checkbox" :id="el2.id">
                                    <label :for="el2.id" :class="el2.colorChip">
                                        {{ el2.chkLabel }}
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="gdsList_con">
                <div class="gdsList_con_banner">
                    <a href="#n" v-for="(el, index) in banner" :key="index">
                        <img :src="el.img" :alt="el.alt">
                    </a>
                </div>
                <div class="gdsList_con_wrap">
                    <div class="gdsList_con_tit">
                        <h3>MEN</h3>
                        <div class="filter_switch">
                            <p>필터 ON/OFF</p>
                            <label for="switch">
                                <input type="checkbox" id="switch">
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <div class="gdsList_con_apply">
                        <button type="button" class="filter_clear">필터 초기화</button>
                        <swiper
                        :space-between="5"
                        :slidesPerView="'auto'"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        class="swiper_add_filter"
                        >
                        </swiper>
                    </div>
                </div>
                <div class="gdsList_con_thumb">
                    <div v-for="(el, index) in gdsList" :key="index">
                        <a href="#n">
                            <img :src="el.img" :alt="el.alt">
                        </a>
                        <div class="gd_list_desc">
                            <div class="gd_list_name">
                                <strong>{{ el.name }}</strong>
                                <button type="button" @click="like" class="gd_list_name_like" :index="index"><span>찜하기</span></button>
                            </div>
                            <div class="gd_list_pri">
                                <p class="gd_list_pri_sale">{{ el.sale }}</p>
                                <p class="gd_list_pri_price">{{ el.price }}</p>
                                <p class="gd_list_pri_disc">{{ el.discount }}</p>
                            </div>
                            <p class="gd_list_rv">리뷰 {{ el.review }}<span>건</span></p>
                        </div>
                    </div>
                </div>
                <!-- pagination -->
                <Pagination />
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Pagination from '@/components/layout/Pagination.vue';
export default {
    name: 'GoodsList',
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
            Pagination,
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Pagination
    },
    data: () => ({
        // isBind: false,
        isOpen: false,
        list: [
            {
                chkColor: true,
                tit: "COLOR",
                list2: [
                    {
                        chkLabel: 'RED',
                        id: 'chk01-1',
                        colorChip: 'red'
                    },
                    {
                        chkLabel: 'BLUE',
                        id: 'chk01-2',
                        colorChip: 'blue'
                    },
                    {
                        chkLabel: 'BLACK',
                        id: 'chk01-3',
                        colorChip: 'black'
                    },
                    {
                        chkLabel: 'GREEN',
                        id: 'chk01-4',
                        colorChip: 'green'
                    },
                    {
                        chkLabel: 'SKYBLUE',
                        id: 'chk01-5',
                        colorChip: 'skyblue'
                    },
                    {
                        chkLabel: 'BROWN',
                        id: 'chk01-6',
                        colorChip: 'brown'
                    },
                ],
            },
            {
                tit: "FIT",
                list2: [
                    {
                        chkLabel: '스트레이트',
                        id: 'chk02-1',
                    },
                    {
                        chkLabel: '스키니',
                        id: 'chk02-2',
                    },
                    {
                        chkLabel: '태이퍼드',
                        id: 'chk02-3',
                    },
                    {
                        chkLabel: '슬림',
                        id: 'chk02-4',
                    },
                    {
                        chkLabel: '와이드',
                        id: 'chk02-5',
                    },
                ],
            },
            {
                tit: "길이",
                list2: [
                    {
                        chkLabel: '롱',
                        id: 'chk03-1',
                    },
                    {
                        chkLabel: '크롭',
                        id: 'chk03-2',
                    },
                    {
                        chkLabel: '반팔',
                        id: 'chk03-3',
                    },
                    {
                        chkLabel: '긴팔',
                        id: 'chk03-4',
                    },
                ],
            },
            {
                tit: "패턴",
                list2: [
                    {
                        chkLabel: '스트라이프',
                        id: 'chk04-1',
                    },
                    {
                        chkLabel: '체크',
                        id: 'chk04-2',
                    },
                ],
            },
            {
                tit: "소재",
                list2: [
                    {
                        chkLabel: '린넨',
                        id: 'chk05-1',
                    },
                    {
                        chkLabel: '쿨테크',
                        id: 'chk05-2',
                    },
                    {
                        chkLabel: '데님',
                        id: 'chk05-3',
                    },
                    {
                        chkLabel: '폴리스',
                        id: 'chk05-4',
                    },
                    {
                        chkLabel: '패딩',
                        id: 'chk05-5',
                    },
                ],
            },
        ],
        banner: [
            {
                img: require("@/assets/images/common/line_bn01.jpg"),
                alt: "상품 리스트 페이지 배너1",
            },
            {
                img: require("@/assets/images/common/line_bn02.jpg"),
                alt: "상품 리스트 페이지 배너2",
            },
        ],
        gdsList: [
            {
                img: require("@/assets/images/main/main_goodSilde01.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5",
            },
            {
                img: require("@/assets/images/main/main_goodSilde02.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5",
            },
            {
                img: require("@/assets/images/main/main_goodSilde03.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5",
            },
            {
                img: require("@/assets/images/main/main_goodSilde02.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5",
            },
            {
                img: require("@/assets/images/main/main_goodSilde03.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5",
            },
            {
                img: require("@/assets/images/main/main_goodSilde01.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "5",
            },
            {
                img: require("@/assets/images/main/main_goodSilde02.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "115",
            },
            {
                img: require("@/assets/images/main/main_goodSilde03.jpg"),
                name: "[남녀공용]배색 윈드브레이커1",
                sale: "39,000",
                price: "49,000",
                discount: "30%",
                review: "3,235",
            },
        ]
    }),

    mounted() {
        // variable gather
        let filter = document.querySelector('.gdsList_filter');
        let contents = document.querySelector('.gdsList_con');
        let fSwitch = document.querySelector('.filter_switch label input');
        let filterTit = document.querySelectorAll('.gdsList_filter_tit');
        let filterEl = document.querySelectorAll('.gdsList_filter_con ul li label');
        let swiperFilterWrap = document.querySelector('.swiper_add_filter .swiper-wrapper');
        let clearFilter = document.querySelector('.filter_clear');
        let addFilter = document.querySelectorAll('.filter_add button');

        // filter on/off
        fSwitch.addEventListener('click', function() {
            if(fSwitch.checked) {
                filter.classList.add('active');
                contents.classList.add('active');
            } else {
                filter.classList.remove('active');
                contents.classList.remove('active');
            }
        })

        // filter accordion
        for(let i = 0; i < filterTit.length; i++) {
            filterTit[i].addEventListener('click', function(e) {
                e.target.parentNode.classList.toggle('on');
            })
        }

        // choice filter
        for(let i = 0; i < filterEl.length; i++) {
            filterEl[i].addEventListener('click', function() {
                let filterElInp = filterEl[i].previousSibling;
                let filterElTxt = filterEl[i].innerHTML;
                if(!filterElInp.checked) {
                    // filter add
                    let swiperFilterDiv = document.createElement('div');
                    let swiperFilterSpan = document.createElement('span');
                    let swiperFilterClose = document.createElement('button');
                    swiperFilterClose.setAttribute('type', 'button');
                    swiperFilterSpan.innerHTML = filterElTxt;
                    swiperFilterDiv.append(swiperFilterSpan, swiperFilterClose);
                    swiperFilterWrap.append(swiperFilterDiv);
                    let colorEl = filterEl[i].closest('.gdsList_filter_item');
                    let filterElCls = filterEl[i].classList;
                
                    // colorchip 
                    if(colorEl.classList.contains('color')) {
                        swiperFilterDiv.classList.add('swiper-slide', 'filter_add', 'colorChip');
                        swiperFilterDiv.firstChild.classList.add(filterElCls);
                    } else {
                        swiperFilterDiv.classList.add('swiper-slide', 'filter_add');
                    }
                } else {
                    // filter remove
                    let filterSlide = document.querySelectorAll('.filter_add');
                    for(let i = 0; i < filterSlide.length; i++) {
                        let filterSlideTxt = filterSlide[i].firstChild.innerHTML;
                        if(filterElTxt == filterSlideTxt) {
                            filterSlide[i].style.display='none';
                        }
                    }
                }
            })
        }

        // choice filter remove
        this.$nextTick(function() {
            
        })

        // choice filter all remove
        clearFilter.addEventListener('click', function() {
            swiperFilterWrap.replaceChildren();
            filterEl.forEach((e) => {
                e.previousSibling.checked = false;
            })
        })
    },

    methods: {
        open() {
            this.isOpen = !this.isOpen;
        },

        // goods like check
        like(e) {
            const idx = e.target.getAttribute('index');
            e.target.classList.toggle('on');
            console.log("like 활성화 : " + idx)
        },
    },
}
</script>

<!-- 2024-01-24 상품 리스트 페이지 정리 -->
<!-- 
    이슈 및 개선 사항
    1. append로 추가한 필터 제거 동작 안됨(vue로 태그 생성 시 작동 정상적으로 확인됨)
    2. vanilla js, scss 코드 줄이기

    추가 기능
    1. 상품 페이지 네이션 기능 추가
    2. 브랜치 테스트
-->
