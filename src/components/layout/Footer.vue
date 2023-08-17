<template>
    <footer class="footer">
        <div class="fWrap">
            <div class="fWrap_top">
                <div class="fLeft">
                    <a href="tel:010-0000-1234" class="fLeft_txt phone">010-0000-1234</a>
                    <p class="fLeft_txt">상담시간 : 오전 10시~오후 5시(토요일, 공휴일 휴무)</p>
                    <a class="fLeft_txt" href="mailto:gugu01@naver.com">gugu01@naver.com(단체주문 문의)</a>
                    <a class="fLeft_txt" href="mailto:gugu02@naver.com">gugu02@naver.com(마케팅 협찬 문의)</a>
                    <div class="fLeft_copyright">
                        <p class="fLeft_txt">
                            OOO사업부 사업자등록번호 : 123-45-67890 [사업자정보확인] 통신판매업 신고번호 : 제 1234-56789호<br>
                            대표이사 : OOO OO시 OO구 OO로 OOO (OO동) 개인정보 보호책임자 : OOO<br>
                            사옥 주소로 상품을 발송하시면 교환ㆍ환불이 불가하므로, 교환ㆍ환불은 사이트 내에서 신청해주시기 바랍니다.
                        </p>
                    </div>
                    <div class="fLeft_sns">
                        <ul>
                            <li v-for="(el, index) in icon" :key="index">
                                <a href="#n">
                                    <img :src="el.img" :alt="el.alt">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fRight">
                    <div>
                        <ul v-for="(el, list) in list" :key="list" :class="{ bold: el.ftBold }">
                            <li v-for="(el2, list2) in el.list2" :key="list2">
                                <a href="#n">{{ el2 }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="fRight_family">
                        <select>
                            <option v-for="(el, select) in select" :key="select" :value="el.value">
                                {{ el.value }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="fWrap_bot">
                <p>Copyright ⓒ ㅎㅎㅎ닷컴 All Right Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer',

    data: () => ({
        icon: [
            {
                img: require("@/assets/images/icon/ico_sns_blog.png"),
                alt:"블로그",
            },
            {
                img: require("@/assets/images/icon/ico_sns_face.png"),
                alt: "페이스북",
            },
            {
                img: require("@/assets/images/icon/ico_sns_insta.png"),
                alt: "인스타그램",
            },
            {
                img: require("@/assets/images/icon/ico_sns_post.png"),
                alt: "포스트",
            },
            {
                img: require("@/assets/images/icon/ico_sns_you.png"),
                alt: "유튜브",
            },
        ],
        list: [
            {
                list2: [
                    '브랜드 소개',
                    '오프라인 매장안내',
                ],
            },
            {
                ftBold: true,
                list2: [
                    '개인정보 처리방침',
                    '약관안내',
                    '윤리경영'
                ],
            },
            {
                list2: [
                    '공지사항',
                    '회원혜택',
                    '채용정보 및 인사제도',
                    '자주묻는 질문',
                    'FAQ'
                ]
            }
        ],
        select: [
            {
                value: "패밀리 사이트",
            },
            {
                value: "이랜드 이츠",
            },
            {
                value: "이랜드 리테일",
            },
            {
                value: "애슐리",
            },
        ],
    })
}
</script>