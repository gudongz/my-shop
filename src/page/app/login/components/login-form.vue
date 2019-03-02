<template>
    <div>
        <h4 class="title">{{title}}</h4>
        <div class="input-group">
            <group>
                <x-input type="text" v-model="form.phone" placeholder="账号"></x-input>
            </group>
            <group>
                <x-input :type="isPassWordShow" v-model="form.password" placeholder="密码">
                    <i :class="[isPassWordShow === 'password' ? 'iconfont icon-biyan' : 'iconfont icon-zhengyan1']" slot="right" @click="togglePassWordShow"></i>
                </x-input>
            </group>
            <group v-if="!!loginOrRegister">
                <x-input :type="isPassWordShow" v-model="form.confirmPassword" placeholder="确认密码"></x-input>
            </group>
        </div>
        <div class="btn-group">
            <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="login">{{btnOneText}}</x-button>
            <x-button @click.native="toggleLoginRegister">{{btnTwoText}}</x-button>
        </div>
    </div>
</template>

<script>
import {
    XInput,
    Group,
    XButton
} from 'vux'
import { apiAppLogin, apiAppRegister } from '@/api/index'
import { mapActions } from 'vuex'

export default {
    name: 'LoginForm',
    components: {
        XInput,
        Group,
        XButton
    },
    data() {
        return {
            form: {
                phone: '',
                password: '',
                confirmPassword: ''
            },
            isPassWordShow: 'password',
            loginOrRegister: 0, // 0 登陆， 1 注册
            title: '账号登陆',
            btnOneText: '立即登陆',
            btnTwoText: '没有账号/点此注册'
        }
    },
    methods: {
        ...mapActions('userInfo', [
            'changeAppUserInfo'
        ]),
        login() {
            if (!this.form.phone) {
                this.$vux.toast.text('请输入账号', 'top')
                return
            }
            if (!this.form.password) {
                this.$vux.toast.text('请输入密码', 'top')
                return
            }
            this.$vux.loading.show({
                text: '加载中....'
            })
            if (this.loginOrRegister === 0) {
                apiAppLogin({
                    phone: this.form.phone,
                    password: this.form.password
                }).then(res => {
                    this.$vux.loading.hide()
                    if (res.result[0].id) {
                        localStorage.setItem('locaAppUserInfo', JSON.stringify(res.result[0]))
                        this.changeAppUserInfo(res.result[0])
                        this.$router.go(-1)
                    }
                })
            } else {
                if (this.form.password !== this.form.confirmPassword) {
                    this.$vux.toast.text('两次密码输入不一致', 'top')
                } else {
                    apiAppRegister({
                        phone: this.form.phone,
                        password: this.form.password
                    }).then(res => {
                        this.$vux.loading.hide()
                        if (res.result[0].id) {
                            localStorage.setItem('locaAppUserInfo', JSON.stringify(res.result[0]))
                            this.changeAppUserInfo(res.result[0])
                            this.$router.go(-1)
                        }
                    })
                }
            }
        },
        toggleLoginRegister() {
            this.loginOrRegister = !this.loginOrRegister
                ? 1
                : 0
            if (!this.loginOrRegister) {
                this.title = '账号登陆'
                this.btnOneText = '立即登陆'
                this.btnTwoText = '没有账号/点此注册'
            } else {
                this.title = '账号注册'
                this.btnOneText = '立即注册'
                this.btnTwoText = '已有账号/点此登陆'
            }
        },
        togglePassWordShow() {
            this.isPassWordShow = this.isPassWordShow === 'password'
                ? 'text'
                : 'password'
        }
    }
}
</script>

<style lang="less" scoped>
.title {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    text-align: center;
}
.btn-group {
    margin-top: 1.5rem;
}
</style>
