<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="container">
            <common-table :deploy="deploy" :table-data="tableData" @tableHandle="handle"></common-table>
        </div>
        <order-detail :detail-data="detailData"></order-detail>
        <change-status :edit-form-data="editFormData" @submit="submit"></change-status>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTable from '../components/common-table'
import OrderDetail from './components/OrderDetail'
import ChangeStatus from './components/ChangeStatus'
import { apiGetOrders, apiUpdateOrderStatus } from '@/api/index'
import { getDate } from '@/utils/util'
export default {
    name: 'OrdersManage',
    components: { BreadCrumb, CommonTable, OrderDetail, ChangeStatus },
    data() {
        return {
            breadcrumbList: ['订单管理'],
            userId: '',
            deploy: {
                tableHeaderList: [
                    { prop: 'order_number', lable: '订单编号' },
                    { prop: 'num', lable: '商品数量' },
                    { prop: 'money', lable: '订单总金额' },
                    { prop: 'userName', lable: '下单用户' },
                    { prop: 'dealStatus', lable: '订单状态' },
                    { prop: 'create_time', lable: '下单日期' },
                    { prop: 'change_time', lable: '订单变更日期' }
                ]
            },
            tableData: [],
            detailData: {
                isShow: false,
                data: {}
            },
            editFormData: {
                isShow: false,
                data: {}
            }
        }
    },
    mounted() {
        let id = this.$route.query.id
        if (typeof id !== 'undefined') {
            this.userId = id
        }
        this.getOrders(this.userId)
    },
    methods: {
        // 根据用户id获取订单，为空时 获取全部订单
        getOrders(params) {
            apiGetOrders({
                id: params
            }).then(res => {
                this.tableData = res.result || []
                console.log(res)
                this.dealData(res.result || [])
            })
        },
        submit(data) {
            let date = getDate()
            let params = {
                date,
                status: data.status,
                id: data.id
            }
            apiUpdateOrderStatus(params).then(res => {
                if (res.result.success) {
                    this.$message.success('操作成功')
                    this.editFormData.isShow = false
                    this.getOrders(this.userId)
                } else {
                    this.$message.error('操作失败')
                }
            })
        },
        dealData(data) {
            let arr = [...data]
            const mapStatus = {
                0: '待支付',
                1: '已支付',
                2: '待发货',
                3: '已发货',
                4: '已完成'
            }
            arr.map(item => {
                item.handle = ['查看详情']
                item.dealStatus = mapStatus[item.status]
                if (item.status !== 4) {
                    item.handle = ['查看详情', '订单状态变更']
                } else {
                    item.handle = ['查看详情']
                }
            })
            this.tableData = arr
        },
        handle(data) {
            console.log(data)
            const mapHandle = {
                0: () => {
                    this.detailData = {
                        isShow: true,
                        data: data.data
                    }
                },
                1: () => {
                    this.editFormData = {
                        isShow: true,
                        id: data.data.id,
                        status: data.data.status
                    }
                }
            }
            mapHandle[data.type]()
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';

</style>
