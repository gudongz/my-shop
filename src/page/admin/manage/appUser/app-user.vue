<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="container">
            <common-table :deploy="deploy" :table-data="tableData" @tableHandle="handle"></common-table>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTable from '../components/common-table'
import { apiGetAppUser } from '@/api/index'
export default {
    name: 'UserManage',
    components: { BreadCrumb, CommonTable },
    data() {
        return {
            breadcrumbList: ['用户管理'],
            deploy: {
                tableHeaderList: [
                    { prop: 'id', lable: '编号' },
                    { prop: 'name', lable: '名字' },
                    { prop: 'phone', lable: '账户' },
                    { prop: 'haveOrder', lable: '订单' }
                ]
            },
            tableData: []
        }
    },
    mounted() {
        this.getAppUser()
    },
    methods: {
        getAppUser() {
            apiGetAppUser().then(res => {
                this.dealData(res.result || [])
            })
        },
        dealData(data) {
            let arr = [...data]
            arr.map(item => {
                if (item.order === '') {
                    item.haveOrder = '暂无订单'
                } else {
                    item.haveOrder = item.order
                    item.handle = ['查看订单']
                }
            })
            this.tableData = arr
        },
        handle(data) {
            console.log(data)
            this.$router.push({ path: '/admin/orders', query: { id: data.data.id } })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';

</style>
