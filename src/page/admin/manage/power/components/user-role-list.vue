<template>
    <div>
        <el-dialog title="选择角色" :visible.sync="roleListData.isShow" width="550px">
            <el-radio-group v-model="checkList">
                <div class="item" v-for="item in list" :key="item.id">
                    <el-radio :label="item.id" :key="item.id">{{item.name}}</el-radio>
                </div>
            </el-radio-group>
            <div slot="footer">
                <el-button size="mini" @click="roleListData.isShow = false">取消</el-button>
                <el-button size="mini" type="primary" @click="submit">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'UserRoleList',
    props: {
        roleListData: Object
    },
    data() {
        return {
            checkList: 0
        }
    },
    computed: {
        list: function(params) {
            return this.roleListData.data
        }
    },
    watch: {
        roleListData: {
            handler(val) {
                for (let i in val.data) {
                    if (val.data[i].checked) {
                        this.checkList = val.data[i].id
                    }
                }
            }
        }
    },
    methods: {
        submit() {
            let params = {
                rids: this.checkList,
                uid: this.roleListData.userId
            }
            params.rids = params.rids.toString()
            this.$emit('saveUserRole', { ...params })
        }
    }
}
</script>

<style lang="less" scoped>
.checkbox-group {
    width: 450px;
    margin: 0 auto;
}
.item {
    margin: 10px 0;
}
</style>
