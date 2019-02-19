<template>
    <div>
        <el-dialog title="选择权限" :visible.sync="allocationData.isShow">
            <div class="container">
                <z-tree ref="tree" :treeData="treeData" @setCheckedId="setCheckedId"></z-tree>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="allocationData.isShow = false">取消</el-button>
                <el-button type="primary" @click="handleConfirm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import ZTree from './z-tree'
import { $message } from '@/utils/util'

import {
    apiGetPowerByRoleId,
    apiEditRolePower
} from '@/api/index'

export default {
    name: 'RoleAllocation',
    props: {
        allocationData: Object
    },
    components: {
        ZTree
    },
    data() {
        return {
            treeData: [],
            selectId: []
        }
    },
    watch: {
        allocationData: {
            handler(val) {
                if (val.isShow) {
                    this.getPowerByRoleId(val)
                }
            },
            deep: true
        }
    },
    methods: {
        handleConfirm() {
            this.$refs.tree.getCheckedNode()
        },
        getPowerByRoleId(params) {
            let id = params.data.id
            apiGetPowerByRoleId({ id }).then(res => {
                this.treeData = res.data || []
            })
        },
        setCheckedId(data) {
            let params = {
                ids: data.join(','),
                roleId: this.allocationData.data.id
            }
            apiEditRolePower(params).then(res => {
                $message(res.code, res.message)
                this.allocationData.isShow = false
            })
        }
    }
}
</script>

<style lang="less" scoped>

.container {
    height: 400px;
    overflow: auto;
    // overflow-x: hidden;
}

</style>
