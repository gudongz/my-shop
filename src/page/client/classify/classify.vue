<template>
    <div class="container">
        <div class="left" ref="left">
            <ul>
                <li
                    ref="menuList"
                    v-for="(item, index) in left"
                    :key="index"
                    :class="{current: currentIndex == index}"
                    @click="selectItem(index, $event)"
                >
                    <span class="left-item">{{item}}</span>
                </li>
            </ul>
        </div>
        <div class="right" ref="right">
            <ul>
                <li v-for="(item, index) in right"
                    :key="index"
                    class="right-item right-item-hook"
                >
                    <h2>{{item.name}}</h2>
                    <ul>
                        <li v-for="(num, index) in item.content"
                            :key="index"
                        >
                            <div>{{item.name + num}}</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name: 'Classify',
    data() {
        return {
            left: ['数学', '语文', '英语', '物理', '化学', '其他'],
            right: [
                {
                    name: '数学',
                    content: ['1', '2', '3', '4', '5', '6', '7']
                },
                {
                    name: '语文',
                    content: ['1', '2', '3', '4', '5', '6', '7']
                },
                {
                    name: '英语',
                    content: ['1', '2', '3', '4', '5', '6', '7']
                },
                {
                    name: '物理',
                    content: ['1', '2', '3', '4', '5', '6', '7']
                },
                {
                    name: '化学',
                    content: ['1', '2', '3', '4', '5', '6', '7']
                },
                {
                    name: '其他',
                    content: ['1', '2', '3', '4', '5', '6', '7']
                },
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
            let menu = this.$refs.menuList;
            let el = menu[index];
            this.lefts.scrollToElement(el, 300, 0, -300)
        },
        _getHeight() {
            let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
            let height = 0;
            this.listHeight.push(height)
            for(let i = 0; i < rightItems.length; i++) {
                let item = rightItems[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        selectItem(index, event) {
            this.scrollY = this.listHeight[index];
            this.rights.scrollTo(0, -this.scrollY, 200)
        }
    },
    computed: {
        currentIndex() {
            const { scrollY, listHeight } = this;
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
    top: 100px;
    bottom: 100px;
    width: 100%;
    overflow: hidden;
    background: #eee;
    .left {
        flex:  0 0 80px;
        background: #f3f5f7;
        li {
            width: 100%;
            height: 100%;
        }
        .left-item {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 50px;
            text-align: center;
            border-bottom: 1px solid yellow;
        }
    }
    .right {
        flex: 1;
        .right-item li {
            width: 100%;
            height: 100px;
            line-height: 100px;
            text-align: center;
            border-bottom: 1px solid yellow;
        }
    }

}

.current {
    background: red;
}

</style>
