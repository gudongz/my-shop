let express = require('express')
// let $sql = require('../sqlMap')
let mysql = require('../dbConnect')
let router = express.Router()

let JsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '00001',
            message: '操作失败！'
        })
    } else {
        res.json({
            code: '00000',
            message: '操作成功！',
            result: ret
        })
    }
}

// const SQLgetGoodsViewPicture = $sql.app.getGoodsViewPicture
// const SQLgetGoodsMessagePicture = $sql.app.getGoodsMessagePicture
// // 获取全部热门商品
// router.get('/getHotGoods', async (req, res) => {
//     let sql = $sql.app.getHotGoods
//     let params = req.query
//     let result = await mysql.connect(sql, [params.hot])
//     for (let i in result) {
//         result[i].view_picture = await mysql.connect(SQLgetGoodsViewPicture, [result[i].id])
//         result[i].message_picture = await mysql.connect(SQLgetGoodsMessagePicture, [result[i].id])
//     }
//     JsonWrite(res, result)
// })

// // 根据 id 获取商品
// router.get('/getGoodsById', async (req, res) => {
//     let sql = $sql.app.getGoodsById
//     let params = req.query
//     let result = await mysql.connect(sql, [params.id])
//     result[0].view_picture = await mysql.connect(SQLgetGoodsViewPicture, [params.id])
//     result[0].message_picture = await mysql.connect(SQLgetGoodsMessagePicture, [params.id])
//     JsonWrite(res, result)
// })
// router.get('/getAllGoods', (req, res) => {
//     let sql = $sql.app.getAllGoods
//     mysql.connect(sql, false, (result) => {
//         if (result) {
//             JsonWrite(res, result)
//         }
//     })
// })

// admin 端 用户登陆
router.post('/login', async (req, res) => {
    let params = req.body
    let result = await mysql.connect('select * from `admin_user` where `phone` = ?', [params.phone])
    let data = {}
    if (!result[0]) {
        JsonWrite(res, '该账户不存在')
    } else {
        if (result[0].password === params.password) {
            if (result[0].status === 0) {
                JsonWrite(res, '该账户无效，请联系超级管理员')
            } else {
                data = { ...result[0] }
                let role = await mysql.connect('select * from `role` where `id` = ?', [result[0].role])
                let rolePower = JSON.parse(role[0].power)
                let powerList = []
                let allPower = await mysql.connect('select * from `power`')
                for (let i in allPower) {
                    if (rolePower.indexOf(allPower[i].id) > -1) {
                        powerList.push({ ...allPower[i], checked: true })
                    } else {
                        powerList.push({ ...allPower[i], checked: false })
                    }
                }
                data = { ...result[0], ...role[0], powerList }
                JsonWrite(res, data)
            }
        } else {
            JsonWrite(res, '密码错误')
        }
    }
})
// 获取所有角色
router.get('/getAllRole', async (req, res) => {
    let result = await mysql.connect('select * from `role`')
    JsonWrite(res, result)
})
// 获取所有权限
router.get('/getAllpower', async (req, res) => {
    let result = await mysql.connect('select * from `power`')
    JsonWrite(res, result)
})
// 根据id 获取权限
router.get('/getPowerByRoleId', async (req, res) => {
    let params = req.query
    let data = {}
    let role = await mysql.connect('select * from `role` where `id` = ?', [params.id])
    let rolePower = JSON.parse(role[0].power)
    let powerList = []
    let allPower = await mysql.connect('select * from `power`')
    for (let i in allPower) {
        if (rolePower.indexOf(allPower[i].id) > -1) {
            powerList.push({ ...allPower[i], checked: true })
        } else {
            powerList.push({ ...allPower[i], checked: false })
        }
    }
    data = { ...role[0], powerList }
    JsonWrite(res, data)
})
// 获取所有管理员用户
router.get('/getAdminUserList', async (req, res) => {
    let userInfo = await mysql.connect('select * from `admin_user`')
    for (let i in userInfo) {
        userInfo[i].haveRole = await mysql.connect('select * from `role` where id = ?', [userInfo[i].role])
    }
    JsonWrite(res, userInfo)
})
module.exports = router
