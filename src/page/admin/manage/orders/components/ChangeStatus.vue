<template>
    <div>
        <el-dialog title="订单状态变更" :visible.sync="editFormData.isShow" width="550px">
            <el-form class="form" :model="form" size="mini">
                <el-form-item label="订单状态变更" label-width="100px">
                    <el-select v-model="form.status" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button size="mini" @click="editFormData.isShow = false">取消</el-button>
                <el-button size="mini" type="primary" @click="submit">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'ChangeStatus',
    props: {
        editFormData: Object
    },
    data() {
        return {
            form: {
                status: ''
            },
            options: [{
                value: '0',
                label: '待支付'
            }, {
                value: '1',
                label: '已支付'
            }, {
                value: '2',
                label: '待发货'
            }, {
                value: '3',
                label: '已发货'
            }, {
                value: '4',
                label: '已完成'
            }]
        }
    },
    watch: {
        editFormData: {
            handler(val) {
                this.form.status = val.status
            },
            deep: true
        }
    },
    methods: {
        submit() {
            let params = {
                id: this.editFormData.id,
                status: this.form.status
            }
            this.$emit('submit', params)
        }
    }
}
</script>

<style lang="less" scoped>
.form {
    width: 450px;
    margin: 0 auto;
}
</style>
