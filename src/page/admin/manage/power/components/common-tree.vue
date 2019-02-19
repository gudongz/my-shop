<template>
    <div>
        <el-tree
            ref="tree"
            :data="tree"
            :props="defaultProps"
            :show-checkbox="showSelect"
            highlight-current
            node-key="id"
            :check-strictly="false"
            :default-expand-all= "expandAll"
            :expand-on-click-node="false"
            :render-content="renderContent"
            @node-click="handleNodeClick"
        >
        </el-tree>
    </div>
</template>

<script>
import { changeTree } from '@/utils/util'
export default {
    name: 'CommonTree',
    props: {
        treeData: {
            type: Array,
            default: () => []
        },
        showSelect: {
            type: Boolean,
            default: false
        },
        expandAll: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        }
    },
    computed: {
        tree() {
            return changeTree(this.treeData)
        }
    },
    methods: {
        renderContent(h, { node, data, store }) {
            let flag = node.childNodes.length
            let icon
            let labelStyle = 'font-size: 14px;'
            if (flag === 0) {
                icon = 'iconfont icon-wenjian'
            } else {
                icon = 'iconfont icon-wenjianjia'
            }
            return (
                <span style={ labelStyle }>
                    <span class={ icon }></span>
                    <span>{ node.label }</span>
                </span>
            )
        },
        handleNodeClick(data) {
            this.$emit('handleNodeClick', data)
        }
    }

}
</script>

<style lang="less" scoped>

</style>
