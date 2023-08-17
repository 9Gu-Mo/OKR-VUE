<template>
    <div class="dim">
        <div class="pop">
            <div class="pop_header">
                <p class="tit">타이틀</p>
                <button type="button" @click="$emit('modalClose')">닫기</button>
            </div>
            <div class="pop_con">컨텐츠</div>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'ModalPop',
}

</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
</style>