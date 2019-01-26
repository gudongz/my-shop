<template>
    <div v-if="headerShow">
        <x-header :left-options="{backText: ''}">{{title}}</x-header>
    </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
    name: 'CommonHeader',
    components: { XHeader },
    data() {
        return {
            title: '',
            headerShow: false
        }
    },
    watch: {
        '$route': {
            handler(params) {
                if (params.path === '/index' || params.path === '/myCenter') {
                    this.headerShow = false
                } else {
                    this.headerShow = true
                    this.title = params.name
                }
            },
            immediate: true
        }
    }
}
</script>

<style lang="less" scoped>

</style>
