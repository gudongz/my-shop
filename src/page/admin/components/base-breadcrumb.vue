<template>
    <div class="breadcrumb">
        <span :class="index === 0 ? 'title' : 'title-item'" v-for="(item, index) of list" :key="index">
            {{item}}
            <span class="line" v-if="index != list.length - 1">/</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: [ 'list' ]
}
</script>

<style lang="less" scoped>
.breadcrumb {
    padding: 10px 20px;
    .title{
        font-size: 13px;
    }
    .title-item {
        font-size: 12px;
    }
    .line {
        color: #000;
    }
}

</style>
