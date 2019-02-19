<template>
    <div class="page-main">
        <bread-crumb :list="breadcrumbList"></bread-crumb>
        <div class="header-group clearnFloat">
            <el-row :gutter="20">
                <el-col :xl="2" :lg="2" :md="2" :sm="4">
                    <el-button type="primary" size="mini">添加</el-button>
                </el-col>
                <el-col :xl="22" :lg="22" :md="22" :sm="20">
                    <el-form :model="searchForm" class="form" size="mini" :inline="true">
                        <el-form-item label="日期：">
                            <el-date-picker
                                class="date-picker"
                                v-model="searchForm.date"
                                type="daterange"
                                unlink-panels
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="类型：">
                            <el-select v-model="searchForm.type" placeholder="请选择">
                                <el-option label="全部" value="0"></el-option>
                                <el-option label="登入" value="1"></el-option>
                                <el-option label="登出" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-row :gutter="6">
                                <el-col :xl="20" :lg="20" :md="20" :sm="20">
                                    <el-input placeholder="请输入内容" v-model="searchForm.name"></el-input>
                                </el-col>
                                <el-col :xl="2" :lg="2" :md="2" :sm="2">
                                    <el-button type="primary" size="mini" icon="el-icon-search"></el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
        <div class="container">
            <pagination :pageData="pageData" @pageChange="pageChange"></pagination>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../../components/base-breadcrumb'
import Pagination from '../../components/base-pagination'
export default {
    name: 'ShopManage',
    components: { BreadCrumb, Pagination },
    data() {
        return {
            breadcrumbList: ['商品管理'],
            searchForm: {
                date: '',
                type: '0',
                inputText: ''
            },
            pageData: {
                pageIndex: 1,
                pageSize: 10,
                pageCount: 10
            }
        }
    },
    methods: {
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
