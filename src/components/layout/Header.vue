<template>
    <header class="header">
        <div class="hWrap">
            <div class="hLeft">
                <div class="hLogo">
                    <a href="#n">
                        <!-- <img :src="logo" alt="logo"> -->
                    </a>
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
                    <li v-for="(el, index) in icon" :key="index" :class="{ login: el.isLogin }">
                        <a href="#n">
                            <!-- <img :src="el.img" :alt="el.alt"> -->
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',

    data: () => ({
        scrollPosition: null,
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
                // img: require("@/assets/images/icon/top_mypage_wh.png"),
                isLogin: true,
                // alt: "로그인",
            },
            {
                // img: require("@/assets/images/icon/top_search_wh.png"),
                // alt: "검색",
            },
            {
                // img: require("@/assets/images/icon/top_wish_wh.png"),
                // alt: "좋아요 리스트",
            },
            {
                // img: require("@/assets/images/icon/top_cart_wh.png"),
                // alt: "장바구니",
            },
        ]
    }),
}
</script>