<template>
    <div>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <more-detail></more-detail>
        <detail-recommend :recommend="recommend"></detail-recommend>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import MoreDetail from './components/MoreDetail'
import DetailRecommend from './components/Recommend'

import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
        MoreDetail,
        DetailRecommend
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            recommend: [],
            list: []
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail', {
                params: {
                    cityId: this.$store.state.city.id,
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res) {
            console.log(res)
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
                this.recommend = data.recommend
            }
        }
    },
    activated() { // 每次页面展示
        this.getDetailInfo()
    },
    mounted() {
        // this.getDetailInfo()
    }

}
</script>

<style lang="stylus" scoped>

</style>
