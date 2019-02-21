<template>
    <div>
        <el-dialog title="用户管理" :visible.sync="editFormData.isShow" width="550px">
            <el-form class="form" :model="form" size="mini">
                <el-form-item label="姓名" label-width="90px">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="手机号" label-width="90px">
                    <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item v-if="this.editFormData.isAdd" label="初始密码" label-width="90px">
                    <el-input v-model="form.password" placeholder="请输入初始密码"></el-input>
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
    name: 'UserEditForm',
    props: {
        editFormData: Object
    },
    data() {
        return {
            form: {
                name: '',
                password: '',
                phone: ''
            }
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
                this.$alert('请输入姓名！')
                return
            }
            if (!this.form.phone) {
                this.$alert('请输入手机号！')
                return
            }
            if (this.editFormData.isAdd && !this.form.password) {
                this.$alert('请输入初始密码！')
                return
            }
            let params = {
                id: this.form.id,
                name: this.form.name,
                phone: this.form.phone,
                password: this.form.password
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
