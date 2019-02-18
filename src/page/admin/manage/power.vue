<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
    </div>
</template>

<script>
import BreadCrumb from '../components/base-breadcrumb'
export default {
    name: 'PowerManage',
    components: { BreadCrumb },
    data() {
        return {
            breadcrumbList: ['权限管理']
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../assets/style/main.less';

</style>
