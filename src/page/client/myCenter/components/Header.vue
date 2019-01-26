<template>
    <div class="header">
        <div class="user">
            <img src="../../../../assets/people.png" alt="用户">
        </div>
        <div class="login">登陆/注册</div>
    </div>
</template>

<script>
export default {
    name: 'CenterHeader'
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 5.2rem;
    background: url('../../../../assets/centerbg.png') center 0 #f37d0f;
    background-size: auto 100%;
    .user {
        margin: 0 8px 0 15px;
        height: 3rem;
        width: 3rem;
        border-radius: 100%;
        overflow: hidden;
        border: 3px solid hsla(0, 0%, 100%, .3);
        img {
            width: 100%;
            height: 100%;
        }
    }
    .login {
        font-size: 14px;
        color: #fff;
    }
}

</style>
