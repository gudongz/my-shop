<template>
    <div>
        <h4 class="title">{{title}}</h4>
        <div class="input-group">
            <group>
                <x-input type="text" placeholder="账号"></x-input>
            </group>
            <group>
                <x-input :type="isPassWordShow" placeholder="密码">
                    <i :class="[isPassWordShow === 'password' ? 'iconfont icon-biyan' : 'iconfont icon-zhengyan1']" slot="right" @click="togglePassWordShow"></i>
                </x-input>
            </group>
            <group v-if="!!loginOrRegister">
                <x-input :type="isPassWordShow" placeholder="确认密码"></x-input>
            </group>
        </div>
        <div class="btn-group">
            <x-button :gradients="['#FF5E3A', '#FF9500']">{{btnOneText}}</x-button>
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
export default {
    name: 'LoginForm',
    components: {
        XInput,
        Group,
        XButton
    },
    data() {
        return {
            isPassWordShow: 'password',
            loginOrRegister: 0, // 0 登陆， 1 注册
            title: '账号登陆',
            btnOneText: '立即登陆',
            btnTwoText: '没有账号/点此注册'
        }
    },
    methods: {
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
