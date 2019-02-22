<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="header-group">
            <el-button  type="primary" size="mini" @click="handleAdd">新增</el-button>
        </div>
        <div class="container">
            <common-table :deploy="deploy" :table-data="tableData" @tableHandle="handle"></common-table>
        </div>
        <role-edit-form :edit-form-data="editFormData" @submit="submit"></role-edit-form>
        <role-allocation :allocation-data="allocationData"></role-allocation>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTable from '../components/common-table'
import RoleEditForm from './components/role-edit-form'
import RoleAllocation from './components/role-allocation'
import {
    apiGetAllRole,
    apiAddOrUpdateRole
} from '@/api/index'

import { $message } from '@/utils/util'

export default {
    name: 'PowerManage',
    components: {
        BreadCrumb,
        CommonTable,
        RoleEditForm,
        RoleAllocation
    },
    data() {
        return {
            breadcrumbList: ['系统管理', '角色管理'],
            deploy: {
                tableHeaderList: [
                    { prop: 'id', lable: '编号' },
                    { prop: 'name', lable: '名称' },
                    { prop: 'type', lable: '类型' }
                ]
            },
            tableData: [],
            allocationData: {
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
        this.getRoleList()
    },
    methods: {
        handleAdd() {
            this.editFormData = {
                isShow: true,
                // id 为空 是添加
                data: {
                    id: '',
                    name: '',
                    type: ''
                }
            }
        },
        handle(data) {
            let mapHandle = {
                0: () => {
                    this.allocationData = {
                        isShow: true,
                        data: data.data
                    }
                },
                1: () => {
                    this.editFormData = {
                        isShow: true,
                        data: data.data
                    }
                }
            }
            mapHandle[data.type]()
        },
        submit(data) {
            console.log(data)
            apiAddOrUpdateRole({
                ...data
            }).then(res => {
                $message(res.code, res.message)
                this.getRoleList()
                this.editFormData.isShow = false
            })
        },
        dealData(val) {
            let data = val.map((item) => {
                item.handle = ['分配权限', '修改']
                return item
            })
            this.tableData = [...data]
        },
        getRoleList() {
            apiGetAllRole().then(res => {
                this.dealData(res.data || [])
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';

</style>
