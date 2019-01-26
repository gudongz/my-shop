<template>
    <div>
        <common-header></common-header>
        <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonFooter from './common/common_footer'
import CommonHeader from './common/common_header'
export default {
    name: 'ClientIndex',
    components: { CommonFooter, CommonHeader },
    data() {
        return {
            headerShow: true
        }
    }
    // watch: {
    //     '$route': {
    //         handler(params) {
    //             if(params.path == '/index' || params.path == "/myCenter" ) {
    //                 this.headerShow = false
    //             }else {
    //                 this.headerShow = true
    //             }
    //         },
    //         immediate: true
    //     }
    // }
}
</script>

<style lang="less" scoped>

.page-main {
    width: 100%;
}

</style>
