<template>
    <div id="areaTree">
        <div class="box-title">
            <a href="javascript:;">列表<i class="fa  fa-refresh" ></i></a>
        </div>
        <div class="tree-box">
            <div class="zTreeDemoBackground left">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../../../plugins/zTree_v3/css/zTreeStyle/zTreeStyle.css'
import '../../../../../../plugins/zTree_v3/js/jquery-1.4.4.min.js'
import '../../../../../../plugins/zTree_v3/js/jquery.ztree.core.min.js'
import '../../../../../../plugins/zTree_v3/js/jquery.ztree.excheck.min.js'

export default {
    name: 'ZTree',
    props: {
        treeData: Array
    },
    data() {
        return {
            setting: {
                check: {
                    enable: true,
                    chkboxType: { 'Y': 'ps', 'N': 's' }
                },
                view: {
                    dblClickExpand: true,
                    expandSpeed: '',
                    showLine: false
                },
                data: {
                    simpleData: {
                        enable: true,
                        idKey: 'id',
                        pIdKey: 'pId',
                        rootPId: 0
                    },
                    key: {
                        checked: 'checked',
                        name: 'name',
                        icon: 'ii',
                        url: 'ur'
                    }
                }
            }
        }
    },
    watch: {
        treeData: {
            handler(val) {
                this.freshArea(val)
            },
            deep: true
        }
    },
    methods: {
        freshArea(data) {
            $.fn.zTree.init($('#treeDemo'), this.setting, data)
            this.$nextTick(() => {
                let treeObj = $.fn.zTree.getZTreeObj('treeDemo')
                let sNodes = treeObj.getNodes()
                if (sNodes.length > 0) {
                    treeObj.expandNode(sNodes[0], true, false)
                }
            })
        },
        getCheckedNode() {
            let treeObj = $.fn.zTree.getZTreeObj('treeDemo')
            let cNodes = treeObj.getCheckedNodes(true)
            // console.log(cNodes)
            let checkedId = []
            for (let i in cNodes) {
                checkedId.push(cNodes[i].id)
            }
            // console.log(checkedId)
            this.$emit('setCheckedId', checkedId)
        }

    }
}
</script>

<style lang="less" scoped>
// @import '../../../../../plugins/zTree_v3/css/zTreeStyle/zTreeStyle.css';

#areaTree{
    border:1px solid #e5e5e5;
    margin-bottom: 2px;
    border-radius: 4px;
    overflow: hidden;

}
.tree-box {
    height: 350px;
    overflow: auto;
}
.box-title{
    border-radius: 3px 3px 0 0;
    background-color: #f5f5f5;
}
.box-title a{
    color: #2fa4e7;
    text-decoration: none;
    font-size:14px;
    display: block;
    padding: 8px 15px;cursor: pointer;
}
.box-title .fa{
    float:right;
    line-height: 20px;
}

</style>
