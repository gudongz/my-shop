
// pageData: {
//     pageIndex: 默认第几页
//     pageSize:  一页展示多少数据
//     pageCount: 总条数
// }

<template>
    <div class="pagination">
        <el-pagination
            small
            @current-change="handleCurrentChange"
            :current-page="pageData.pageIndex"
            :page-size="pageData.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="pageData.pageCount">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        pageData: {
            type: Object,
            default: () => ({
                pageIndex: 0,
                pageSize: 10,
                pageCount: 10
            })
        }
    },
    data() {
        return {
        }
    },
    methods: {
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.$emit('pageChange', val)
        }
    }
}
</script>

<style lang="less" scoped>

.pagination {
    margin-top: 15px;
    text-align: right;
}

</style>
