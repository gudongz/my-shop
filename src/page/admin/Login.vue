<template>
<div class="login-page-container">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">商城后台系统</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="邮箱账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleSubmit2" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import { apiLogin } from '@/api/index.js'
import { $message, changeTree } from '@/utils/util'
import { mapActions } from 'vuex'

export default {
    props: {
    },
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: '17739019681',
                checkPass: '123'
            },
            rules2: {
                account: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                }],
                checkPass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }]
            },
            checked: true
        }
    },
    methods: {
        ...mapActions('siderMenu', [
            'setMenu'
        ]),
        handleSubmit2(ev) {
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    this.logining = true
                    apiLogin({
                        phone: this.ruleForm2.account,
                        password: this.ruleForm2.checkPass
                    }).then(res => {
                        $message(res.code, res.message)
                        if (res.code === '00000' || res.code === '00001') {
                            sessionStorage.setItem('adminUserInfo', JSON.stringify(res.data))
                            this.setMenu(changeTree(res.data.power || []))
                            this.logining = false
                            this.$router.push({ path: '/admin/index' })
                        } else {
                            this.logining = false
                        }
                    }).catch(error => {
                        if (error) {
                            this.logining = false
                        }
                    })
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.remember {
    margin: 0px 0px 35px 0px;
}
.title{
    text-align: center;
    padding-bottom: 20px;
}
</style>
