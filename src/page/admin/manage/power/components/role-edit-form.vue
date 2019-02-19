<template>
    <div>
        <el-dialog title="角色管理" :visible.sync="editFormData.isShow" width="550px">
            <el-form class="form" :model="form" size="mini">
                <el-form-item label="排序" label-width="70px">
                    <el-input v-model="form.name" placeholder="请输入角色名称"></el-input>
                </el-form-item>
                <el-form-item label="类型" label-width="70px">
                    <el-input v-model="form.type" placeholder="请输入角色类型"></el-input>
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
    name: 'RoleEditForm',
    props: {
        editFormData: Object
    },
    data() {
        return {
            form: {}
        }
    },
    watch: {
        editFormData: {
            handler(val) {
                this.form = { ...val.data }
            },
            deep: true
        }
    },
    methods: {
        submit() {
            if (!this.form.name) {
                this.$alert('请输入角色名称！')
                return
            }
            if (!this.form.type) {
                this.$alert('请输入角色类型！')
                return
            }
            let params = {
                id: this.form.id,
                name: this.form.name,
                type: this.form.type
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
