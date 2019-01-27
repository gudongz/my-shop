<template>
    <div class="main">
        <div class="header">
            <div></div>
            <!-- <p>账号登陆</p> -->
        </div>
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from './components/login-form'
export default {
    name: 'ClientLogin',
    components: {
        LoginForm
    }
}
</script>

<style lang="less" scoped>
.main {
    padding: 0 2rem;
}
.header {
    height: 6rem;
    line-height: 6rem;
    font-size: 1.2rem;
    text-align: center;
}
</style>
