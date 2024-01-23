import { createWebHistory, createRouter } from "vue-router";

// 연결할 각 컴포넌트 import
import TestComponent from "@/components/TestComponent.vue";
// import TestComponent2 from "@/components/TestComponent2.vue";
// import TestComponent3 from "@/components/TestComponent3.vue";
import Main from "@/components/Main.vue";
import GoodsList from '@/components/sub/GoodsList.vue';
import ProductDetail from '@/components/sub/ProductDetail.vue';

// 라우터 경로 설계
const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/test",
        name: "TestComponent",
        component: TestComponent,
    },
    {
        path: "/sub/GoodsList",
        name: "GoodsList",
        component: GoodsList
    },
    {
        path: "/sub/ProductDetail",
        name: "ProductDetail",
        component: ProductDetail
    }
]

// 라우터 생성
const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;