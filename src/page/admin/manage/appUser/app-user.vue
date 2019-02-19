<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
export default {
    name: 'UserManage',
    components: { BreadCrumb },
    data() {
        return {
            breadcrumbList: ['用户管理']
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';

</style>
