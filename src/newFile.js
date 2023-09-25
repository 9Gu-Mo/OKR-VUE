export default (await import('vue')).defineComponent({
name: 'App',
components: {
Header,
Footer,
ModalPop
},
data: () => ({
popOpen: false,
}),

mounted() {
// search open
let search = document.querySelector('#search');
let html = document.querySelector('html');
let dim = document.querySelector('.dim');
search.addEventListener('click', function () {
html.classList.toggle('scrollFix');
dim.classList.toggle('on');
});

window.addEventListener('load', function () {
console.log("페이지 로드 시 출력");
let page = document.querySelector('.page');
let subHeader = page.parentNode.previousElementSibling;
if (page.classList.contains('main')) {
console.log("메인 페이지");
} else {
console.log("서브 페이지");
subHeader.classList.add('subHeader');
}
});
}
});
