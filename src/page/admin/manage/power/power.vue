<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="header-group">
            <!-- <el-button type="primary" size="mini" @click="handleAdd">增加权限</el-button>
            <el-button type="primary" size="mini" @click="handleDelete">删除</el-button> -->
        </div>
        <div class="container">
            <common-tree :tree-data="treeData" @handleNodeClick="handleNodeClick"></common-tree>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import CommonTree from './components/common-tree'

import { apiGetAllPower } from '@/api/index'
export default {
    name: 'PowerManage',
    components: { BreadCrumb, CommonTree },
    data() {
        return {
            breadcrumbList: ['系统管理', '权限管理'],
            treeData: [],
            treeItem: {}
        }
    },
    mounted() {
        this.getAllpower()
    },
    methods: {
        handleAdd() {

        },
        handleDelete() {

        },
        handleNodeClick(data) {
            this.treeItem = { ...data }
        },
        getAllpower() {
            apiGetAllPower().then(res => {
                this.treeData = res.result || []
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/style/main.less';

</style>
