<template>
    <div>
        <el-dialog title="编辑" :visible.sync="editFormData.isShow" width="630px">
            <el-form class="form" :model="form" size="mini" :inline="true">
                <el-form-item label="商品名称" label-width="90px">
                    <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
                </el-form-item>
                <el-form-item label="颜色" label-width="90px">
                    <el-input v-model="form.color" placeholder="请输入商品颜色"></el-input>
                </el-form-item>
                <el-form-item label="规格参数" label-width="90px">
                    <el-input v-model="form.size" placeholder="请输入商品规格参数"></el-input>
                </el-form-item>
                <el-form-item label="品牌" label-width="90px">
                    <el-input v-model="form.brand" placeholder="请输入商品品牌"></el-input>
                </el-form-item>
                <el-form-item label="价格" label-width="90px">
                    <el-input v-model="form.price" placeholder="请输入商品价格"></el-input>
                </el-form-item>
                <el-form-item label="库存" label-width="90px">
                    <el-input v-model="form.store" placeholder="请输入商品库存"></el-input>
                </el-form-item>
                <el-form-item label="类型" class="radios" label-width="90px">
                    <el-radio v-model="form.classify" :label="1">手机</el-radio>
                    <el-radio v-model="form.classify" :label="2">电脑</el-radio>
                </el-form-item>
                <el-form-item label="热卖" class="radios" label-width="90px">
                    <el-radio v-model="form.hot" :label="0">否</el-radio>
                    <el-radio v-model="form.hot" :label="1">是</el-radio>
                </el-form-item>
                <el-form-item label="商品描述" class="textarea" label-width="90px">
                    <el-input v-model="form.message" type="textarea" :autosize="{minRows: 3, maxRows: 3}" placeholder="请输入商品描述"></el-input>
                </el-form-item>
                <el-form-item label="轮播图片" class="textarea" label-width="90px">
                    <!-- <el-input v-model="form.messagePicture" type="textarea" :autosize="{minRows: 3, maxRows: 3}" placeholder="请输入商品轮播图片地址，多个地址请用“,”隔开"></el-input> -->
                    <el-upload
                        class="upload"
                        action="https://upload.qiniup.com"
                        list-type="picture-card"
                        :file-list="view_picture"
                        :before-upload="beforeUpload"
                        :on-remove="viewRemove"
                        :on-success="viewSuccess"
                        :data="upToken">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="详情图片" class="textarea" label-width="90px">
                    <!-- <el-input v-model="form.viewPicture" type="textarea" :autosize="{minRows: 3, maxRows: 3}" placeholder="请输入商品详情图片地址，多个地址请用“,”隔开"></el-input> -->
                    <el-upload
                        class="upload"
                        action="https://upload.qiniup.com"
                        list-type="picture-card"
                        :file-list="message_picture"
                        :before-upload="beforeUpload"
                        :on-success="messageSuccess"
                        :on-remove="messageRemove"
                        :data="upToken">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button size="mini" @click="editFormData.isShow = false">取消</el-button>
                <el-button size="mini" type="primary" @click="submit">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { apiGetToken } from '@/api/index'
export default {
    name: 'GoodsEditForm',
    props: {
        editFormData: Object
    },
    data() {
        return {
            form: {
            },
            dialogImageUrl: '',
            dialogVisible: false,
            view_picture: [],
            message_picture: [],
            upToken: {
                token: ''
                // key: ''
            },
            test: ''
        }
    },
    watch: {
        editFormData: {
            handler(val) {
                this.form = { ...val.data }
                this.dealData(val.data || {})
            },
            deep: true
        }
    },
    mounted() {
        apiGetToken().then(res => {
            if (res.result !== 'error') {
                this.upToken.token = res.result
            }
        })
    },
    methods: {
        dealData(data) {
            this.message_picture = data.message_picture.map(item => {
                return { url: item.url }
            })
            this.view_picture = data.view_picture.map(item => {
                return { url: item.url }
            })
        },
        submit() {
            this.form.view_picture = this.view_picture.map(item => {
                return item.url
            })
            this.form.message_picture = this.message_picture.map(item => {
                return item.url
            })
            this.$emit('submit', this.form)
        },
        beforeUpload(file, fileList) {
            // console.log(file, fileList)
        },
        viewRemove(file, fileList) {
            this.view_picture = [...fileList]
        },
        messageRemove(file, fileList) {
            this.message_picture = [...fileList]
        },
        viewSuccess(response, file, fileList) {
            if (file.status === 'success') {
                let url = `http://qqj68zl3s.hd-bkt.clouddn.com/${response.key}`
                this.view_picture.push({ url })
            }
        },
        messageSuccess(response, file, fileList) {
            if (file.status === 'success') {
                let url = `http://qqj68zl3s.hd-bkt.clouddn.com/${response.key}`
                this.message_picture.push({ url })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.radios {
    width: 268px;
}
.textarea {
    width: 100%;
}
.textarea /deep/ .el-form-item__content {
    width: 78%;
}
.img-box {
    img {
        height: 80px;
        width: 80px;
        border-radius: 6px;
    }
}
.upload /deep/ .el-upload {
    height: 80px;
    width: 80px;
    line-height: 90px;
}
.upload /deep/ .el-upload-list__item {
    height: 80px;
    width: 80px;
}
// .upload {
//     height: 100px;
//     width: 100px;
// }
</style>
