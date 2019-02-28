<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <common-table></common-table>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTable from '../components/common-table'
export default {
    name: 'UserManage',
    components: { BreadCrumb, CommonTable },
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
