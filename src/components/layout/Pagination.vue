<template>
    <ul class="pagination">
        <li v-for="(el, idx) in pagination" :key="idx" :class="el.active">
            <button type="button">{{ el.page }}</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Pagination',
    data: () => ({
        pagination: [
            {
                page: "prev"
            },
            {
                page: "1",
                active: "active"
            },
            {
                page: "2"
            },
            {
                page: "3"
            },
            {
                page: "4"
            },
            {
                page: "5"
            },
            {
                page: "next"
            },
        ]
    })
}
</script>
