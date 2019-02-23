<template>
    <div class="container">
        <div class="left" ref="left">
            <ul>
                <li
                    ref="menuList"
                    v-for="(item, index) in left"
                    :key="index"
                    @click="selectItem(index, $event)"
                >
                    <span :class="{'left-item': true, 'current': currentIndex == index}">{{item}}</span>
                </li>
            </ul>
        </div>
        <div class="right" ref="right">
            <ul>
                <li v-for="(item, index) in right"
                    :key="index"
                    class="right-item right-item-hook"
                >
                    <h2 class="right-item-title">
                        <span>{{item.title}}</span>
                    </h2>
                    <con-item :item-data="item.children"></con-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import ConItem from './components/con-item'
export default {
    name: 'Classify',
    components: {
        ConItem
    },
    data() {
        return {
            left: ['手机', '电脑'],
            right: [
                {
                    titleid: '0',
                    img: '//i8.mifile.cn/v1/a1/7f76151f-0f4e-c398-ad4b-5ce8d2e17369!500x200.webp',
                    title: '新品',
                    children: [
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        },
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        },
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        },
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        }
                    ]
                },
                {
                    titleid: '1',
                    img: '//i8.mifile.cn/v1/a1/7f76151f-0f4e-c398-ad4b-5ce8d2e17369!500x200.webp',
                    title: '众筹',
                    children: [
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        },
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        },
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        },
                        {
                            id: '0',
                            img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/23a250dfaba87009c28a627d3a292c76.png?thumb=1&w=120&h=120',
                            name: '红米Note 7'
                        }
                    ]
                }
            ],
            listHeight: [],
            scrollY: 0, // 实时获取当前Y轴高度
            clickEvent: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this._initScroll()
            this._getHeight()
        })
    },
    methods: {
        _initScroll() {
            this.lefts = new BetterScroll(this.$refs.left, {
                click: true
            })
            this.rights = new BetterScroll(this.$refs.right, {
                probeType: 3
            })
            this.rights.on('scroll', (pos) => {
                // this.scrollY = Math.abs(Math.round(pos.y))
                this.scrollY = Math.abs(pos.y)
            })
        },
        _initLeftScroll(index) {
            let menu = this.$refs.menuList
            let el = menu[index]
            this.lefts.scrollToElement(el, 300, 0, -300)
        },
        _getHeight() {
            let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
            let height = 0
            this.listHeight.push(height)
            for (let i = 0; i < rightItems.length; i++) {
                let item = rightItems[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        selectItem(index, event) {
            this.scrollY = this.listHeight[index]
            this.rights.scrollTo(0, -this.scrollY, 200)
        }
    },
    computed: {
        currentIndex() {
            const { scrollY, listHeight } = this
            return listHeight.findIndex((tops, index) => {
                this._initLeftScroll(index) // 调用左右联调滚动效果
                return scrollY >= tops && scrollY < listHeight[index + 1]
            })
        }
    }
}
</script>

<style lang="less" scoped>

.container {
    display: flex;
    position: absolute;
    top: 2.9rem;
    bottom: 3.3rem;
    width: 100%;
    overflow: hidden;
    background: #fff;
    .left {
        flex:  0 0 80px;
        background: #fff;
        border-right: 1px solid #eee;
        li {
            width: 100%;
            height: 100%;
        }
        .left-item {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 48px;
            text-align: center;
            font-size: 14px;
        }
        .current {
            font-size: 18px;
            color: #fb7d34;
        }
    }
    .right {
        flex: 1;
        padding: 0 10px;
        .right-item {
            width: 100%;
            text-align: center;
            .right-item-title {
                text-align: center;
                padding: 15px;
                span {
                    position: relative;
                    &::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: -70%;
                        width: 15px;
                        border-top: 1px solid #e0e0e0;
                    }
                    &::before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: -70%;
                        width: 15px;
                        border-top: 1px solid #e0e0e0;
                    }
                }
            }
        }
    }

}

</style>
