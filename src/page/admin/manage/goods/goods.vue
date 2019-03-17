<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="header-group clearnFloat">
            <el-row :gutter="20">
                <el-col :xl="2" :lg="2" :md="2" :sm="4">
                    <el-button type="primary" size="mini" @click="handleAddGoods">添加</el-button>
                </el-col>
                <el-col :xl="22" :lg="22" :md="22" :sm="20">
                    <el-form class="form" size="mini" :inline="true">
                        <el-form-item label="类型：">
                            <el-select v-model="search" placeholder="请选择">
                                <el-option label="全部" value=""></el-option>
                                <el-option label="手机" value="1"></el-option>
                                <el-option label="电脑" value="2"></el-option>
                            </el-select>
                            <el-button type="primary" size="mini" icon="el-icon-search" @click="handleSearch"></el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
        <div class="container">
            <common-table :deploy="deploy" :table-data="tableData" @tableHandle="handle"></common-table>
        </div>
        <edit-form :editFormData="editFormData" @submit="submit"></edit-form>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTable from '../components/common-table'
import EditForm from './components/EditForm'
import { apiGetGoods, apiAddOrUpdateGoods } from '@/api/index'
export default {
    name: 'ShopManage',
    components: { BreadCrumb, CommonTable, EditForm },
    data() {
        return {
            breadcrumbList: ['商品管理'],
            deploy: {
                tableHeaderList: [
                    { prop: 'id', lable: '编号' },
                    { prop: 'name', lable: '名称' },
                    { prop: 'color', lable: '颜色' },
                    { prop: 'size', lable: '规格参数' },
                    { prop: 'classifyName', lable: '分类' },
                    { prop: 'brand', lable: '品牌' },
                    { prop: 'price', lable: '价格' },
                    { prop: 'store', lable: '库存' }
                ]
            },
            tableData: [],
            search: '',
            editFormData: {
                isShow: false,
                data: {}
            }
        }
    },
    mounted() {
        this.getGoods()
    },
    methods: {
        handleSearch() {
            this.getGoods(this.search)
        },
        handleAddGoods() {
            this.editFormData = {
                isShow: true,
                data: {
                    id: '',
                    name: '',
                    color: '',
                    size: '',
                    brand: '',
                    price: '',
                    store: '',
                    classify: '',
                    hot: '',
                    message: '',
                    message_picture: [],
                    view_picture: []
                }
            }
        },
        getGoods(type = '') {
            apiGetGoods({
                type
            }).then(res => {
                console.log(res)
                this.dealData(res.result || [])
            })
        },
        handle(data) {
            // 0 编辑 ， 1 删除
            let mapHandle = {
                0: () => {
                    this.editFormData = {
                        isShow: true,
                        data: data.data
                    }
                },
                1: () => {}
            }
            mapHandle[data.type]()
        },
        dealData(data) {
            let arr = [...data]
            arr.map(item => {
                item.handle = ['编辑', '删除']
                if (item.classify === 1) {
                    item.classifyName = '手机'
                } else {
                    item.classifyName = '电脑'
                }
            })
            this.tableData = arr
        },
        submit(data) {
            apiAddOrUpdateGoods({ ...data }).then(res => {
                this.getGoods(this.search)
                this.editFormData.isShow = false
            })
        },
        pageChange() {

        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';

.date-picker {
    width: 200px;
}
.select {
    width: 200px;
}
</style>
