<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
    </div>
</template>

<script>
import BreadCrumb from '../components/base-breadcrumb'
export default {
    name: 'AdminIndex',
    components: { BreadCrumb },
    data() {
        return {
            breadcrumbList: ['首页']
        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>

<style lang="less" scoped>
@import '../../../assets/style/main.less';

</style>
