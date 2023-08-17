<template>
    <div class="view">
        <grid-layout :layout="layout"
                    :col-num="12"
                    :row-height="30"
                    :is-draggable="draggable"
                    :is-resizable="resizable"
                    :vertical-compact="true"
                    :use-css-transforms="true"
                    :responsive="responsive"
        >
            <grid-item v-for="item in layout" :key="item"
                    :static="item.static"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
            >
                <span class="text">{{itemTitle(item)}}</span>
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"

export default {
    components: {
        GridLayout,
        GridItem
    },
    data() {
        return {
            layout: [
                {"x":0,"y":0,"w":6,"h":6,"i":"오늘의 날씨", static: false},
                {"x":6,"y":0,"w":6,"h":6,"i":"설문 조사", static: false},
                {"x":0,"y":0,"w":4,"h":6,"i":"2", static: false},
                {"x":4,"y":0,"w":4,"h":6,"i":"3", static: false},
                {"x":8,"y":0,"w":4,"h":6,"i":"4", static: false},
                {"x":0,"y":0,"w":8,"h":4,"i":"타임라인", static: false},
                {"x":8,"y":0,"w":4,"h":4,"i":"6", static: false},
            ],
            draggable: true,
            resizable: false,
            index: 0,
            responsive: true
        }
    },
    methods: {
        itemTitle(item) {
            let result = item.i;
            if (item.static) {
                result += " - Static";
            }
            return result;
        }
    }
}

</script>

<style>
.container .vue-grid-item.vue-grid-placeholder {
    background: green;
}

.vue-grid-layout {
    background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
    background: #fff;
    border: 1px solid black;
    border-radius: 15px;
}

.vue-grid-item .resizing {
    opacity: 0.9;
}

.vue-grid-item .static {
    background: #cce;
}

.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}

.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}

.vue-grid-item .minMax {
    font-size: 12px;
}

.vue-grid-item .add {
    cursor: pointer;
}

.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}


</style>