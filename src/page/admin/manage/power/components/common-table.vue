<template>
    <div>
        <el-table
            :data="tableData"
            size="mini"
            :header-cell-style="tableHeaderColor">
            <el-table-column
                v-for="item in deploy.tableHeaderList"
                :key="item.id"
                :label="item.lable"
                :prop="item.prop"
                align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <div>
                        <el-button
                            size="mini"
                            v-for="(item, index) in scope.row.handle"
                            :key="index"
                            type="text"
                            @click="handleClick(index, scope.row)">{{item}}
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'CommonTable',
    props: {
        deploy: Object,
        tableData: Array
    },
    methods: {
        handleClick(index, data) {
            this.$emit('tableHandle', { type: index, data })
        },
        tableHeaderColor({ row, rowIndex }) {
            return { backgroundColor: '#eee' }
        }
    }
}
</script>

<style lang="less" scoped>

</style>
