<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="header-group">
            <el-input v-model="searchInput" class="search-input" size="mini" placeholder="请输入姓名查询"></el-input>
            <el-button type="primary" size="mini" @click="handleSearch">查询</el-button>
            <el-button type="primary" size="mini" @click="handleAddUser">新增</el-button>
        </div>
        <div class="container">
            <common-table :deploy="deploy" :table-data="tableData" @tableHandle="handle"></common-table>
            <!-- <pagination :page-data="pageData" @pageChange="handlePageChange"></pagination> -->
        </div>
        <user-edit-form :edit-form-data="editFormData" @submit="submit"></user-edit-form>
        <user-role-list :role-list-data="roleListData" @saveUserRole="saveUserRole"></user-role-list>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTable from '../components/common-table'
// import Pagination from '@/page/admin/components/base-pagination'
import UserEditForm from './components/user-edit-form'
import UserRoleList from './components/user-role-list'

import {
    apiGetAdminUserList,
    apiGetRoleByUserId,
    apiUpdateOrAddUser,
    apiUpdateUserRole,
    apiDeleteAdminUser
} from '@/api/index'

import { $message } from '@/utils/util'

export default {
    name: 'PowerManage',
    components: {
        BreadCrumb,
        CommonTable,
        // Pagination,
        UserEditForm,
        UserRoleList
    },
    data() {
        return {
            breadcrumbList: ['系统管理', '用户管理'],
            deploy: {
                tableHeaderList: [
                    { prop: 'id', lable: '编号' },
                    { prop: 'name', lable: '用户名' },
                    { prop: 'phone', lable: '账户' },
                    { prop: 'dealStatus', lable: '状态' },
                    { prop: 'dealRoleList', lable: '拥有的角色' }
                ]
            },
            pageData: {
                pageIndex: 0,
                pageSize: 10,
                pageCount: 10
            },
            tableData: [],
            searchInput: '',
            editFormData: {
                isShow: false,
                data: {}
            },
            roleListData: {
                isShow: false,
                data: {}
            }
        }
    },
    mounted() {
        this.getAdminUserList({
            name: '',
            pageIndex: 1,
            pageSize: 10
        })
    },
    methods: {
        getAdminUserList(params) {
            // name为空 获取全部， 有内容查询
            apiGetAdminUserList({
                ...params
            }).then(res => {
                this.dealData(res.result || [])
            })
        },
        dealData(data) {
            let dealArr = data.map((item) => {
                item.dealStatus = !item.status
                    ? '无效'
                    : '有效'
                item.dealRoleList = item.haveRole.map((val) => {
                    return val.name
                })
                item.handle = !item.status
                    ? ['分配角色', '修改', '设置有效']
                    : ['分配角色', '修改', '设置无效']
                item.dealRoleList = item.dealRoleList.join('，')
                return item
            })
            this.tableData = [ ...dealArr ]
        },
        // 保存用户分配的角色
        saveUserRole(params) {
            console.log(params)
            apiUpdateUserRole({
                ...params
            }).then(res => {
                $message(res.code, res.message)
                this.roleListData.isShow = false
                this.getAdminUserList({
                    name: this.searchInput,
                    pageIndex: 1,
                    pageSize: 10
                })
            })
        },
        handleSearch() {
            this.getAdminUserList({
                name: this.searchInput,
                pageIndex: 1,
                pageSize: 10
            })
        },
        handleAddUser() {
            this.editFormData = {
                isShow: true,
                isAdd: true,
                data: {
                    id: '',
                    name: '',
                    phone: '',
                    password: ''
                }
            }
        },
        // 增加用户 或 修改用户 提交
        submit(params) {
            apiUpdateOrAddUser({
                ...params
            }).then(res => {
                $message(res.code, res.message)
                this.editFormData.isShow = false
                this.getAdminUserList({
                    name: this.searchInput,
                    pageIndex: this.pageData.pageIndex,
                    pageSize: 10
                })
            })
            console.log(params)
        },
        // 页数改变
        handlePageChange(index) {
            console.log(index)
            this.pageData.pageIndex = index
            this.getAdminUserList({
                name: this.searchInput,
                pageIndex: index,
                pageSize: 10
            })
        },
        handle(data) {
            // 判断用户操作，0 分配角色，1 修改， 2 更改用户状态
            let mapHandle = {
                0: () => {
                    apiGetRoleByUserId({ id: data.data.id }).then(res => {
                        this.roleListData = {
                            isShow: true,
                            userId: data.data.id,
                            data: res.data || []
                        }
                    })
                },
                1: () => {
                    console.log(data.data)
                    this.editFormData = {
                        isShow: true,
                        isAdd: false,
                        data: data.data
                    }
                },
                2: () => {
                    apiDeleteAdminUser({ id: data.data.id }).then(res => {
                        $message(res.code, res.message)
                        this.getAdminUserList({
                            name: this.searchInput,
                            pageIndex: this.pageData.pageIndex,
                            pageSize: 10
                        })
                    })
                }
            }
            mapHandle[data.type]()
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';
.search-input {
    margin-right: 10px;
    width: 170px;
}
</style>
