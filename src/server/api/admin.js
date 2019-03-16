let express = require('express')
let $sql = require('../sqlMap')
let mysql = require('../dbConnect')
let router = express.Router()

let JsonWrite = function(res, ret) {
    if (ret.code) {
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

const SQLgetGoodsViewPicture = $sql.app.getGoodsViewPicture
const SQLgetGoodsMessagePicture = $sql.app.getGoodsMessagePicture
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
    try {
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
    } catch (error) {
        JsonWrite(res, error)
    }
})
// 获取所有管理员用户
router.get('/getAdminUserList', async (req, res) => {
    try {
        let userInfo = await mysql.connect('select * from `admin_user`')
        for (let i in userInfo) {
            userInfo[i].haveRole = await mysql.connect('select * from `role` where id = ?', [userInfo[i].role])
        }
        JsonWrite(res, userInfo)
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 更新角色权限
router.post('/editRolePower', async (req, res) => {
    let params = req.body
    try {
        let result = await mysql.connect('update `role` set `power` = ? where `id` = ?', [params.ids, params.roleId])
        if (result) {
            JsonWrite(res, '修改成功')
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})
// 角色的添加和修改type
router.post('/addOrUpdateRole', async (req, res) => {
    let params = req.body
    try {
        if (params.id === '') {
            let str = '[1]'
            let result = await mysql.connect('insert into `role` (name, type, power) value (?, ?, ?)', [params.name, params.type, str])
            if (result) {
                JsonWrite(res, '添加成功')
            }
        } else {
            let result = await mysql.connect('update `role` set `name` = ?, `type` = ? where `id` = ?', [params.name, params.type, params.id])
            if (result) {
                JsonWrite(res, '修改成功')
            }
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 根据用户id 获取角色
router.get('/getRoleByUserId', async (req, res) => {
    let params = req.query
    try {
        let userRoleId = await mysql.connect('select `role` from `admin_user` where `id` = ?', [params.id])
        let roleList = await mysql.connect('select * from `role`')
        for (let i in roleList) {
            /* eslint-disable */
            if (roleList[i].id == userRoleId[0].role) {
                roleList[i].checked = true
            }
            /* eslint-enable */
        }
        JsonWrite(res, roleList)
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 为用户分配角色
router.post('/updateUserRole', async (req, res) => {
    let params = req.body
    try {
        let result = await mysql.connect('update `admin_user` set `role` = ? where `id` = ?', [params.rids, params.uid])
        if (result) {
            JsonWrite(res, '修改成功')
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 添加 或 修改 管理员用户
router.post('/updateOrAddUser', async (req, res) => {
    let params = req.body
    try {
        if (params.id === '') {
            let isHave = await mysql.connect('select * from `admin_user` where `phone` = ?', [params.phone])
            // console.log(isHave)
            // 如果已存在该手机号，抛出错误
            if (isHave.length > 0) {
                let obj = {
                    code: '000'
                }
                throw obj
            } else {
                let result = await mysql.connect('insert into  `admin_user` (name, phone, password, role, status) value (?, ?, ?, ?, ?)', [
                    params.name,
                    params.phone,
                    params.password,
                    0,
                    1
                ])
                if (result) {
                    JsonWrite(res, '添加成功')
                }
            }
        } else {
            let result = await mysql.connect('update `admin_user` set `phone` = ?, `name` = ? where `id` = ?', [params.phone, params.name, params.id])
            if (result) {
                JsonWrite(res, '修改成功')
            }
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 更改用户状态，设置为无效 / 设置为有效
router.post('/deleteAdminUser', async (req, res) => {
    let params = req.body
    try {
        let userStatus = await mysql.connect('select `status` from `admin_user` where `id` = ?', [params.id])
        let status = userStatus[0].status === '0'
            ? 1
            : 0
        let result = await mysql.connect('update `admin_user` set `status` = ? where `id` = ?', [status, params.id])
        if (result) {
            JsonWrite(res, '修改成功')
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 获取商品，type为 ‘’ 时获取全部、1 获取手机、2 获取电脑
router.get('/getGoods', async (req, res) => {
    let params = req.query
    try {
        if (params.type === '' || params.type === 0) {
            let result = await mysql.connect('select * from `goods`')
            JsonWrite(res, result)
        } else {
            let result = await mysql.connect('select * from `goods` where `classify` = ?', [params.type])
            JsonWrite(res, result)
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})

// 获取所有app端用户
router.get('/getAppUser', async (req, res) => {
    try {
        let result = await mysql.connect('select * from `app_user`')
        JsonWrite(res, result)
    } catch (error) {
        JsonWrite(res, error)
    }
})
// 获取订单， id 为 ‘’ 时获取全部
router.get('/getOrders', async (req, res) => {
    let params = req.query
    try {
        let result
        if (params.id === '') {
            result = await mysql.connect('select * from `order`')
        } else {
            result = await mysql.connect('select * from `order` where `user_id` = ?', [params.id])
        }
        if (result[0]) {
            for (let i in result) {
                let userName = await mysql.connect('select `name` from `app_user` where `id` = ?', [result[i].user_id])
                result[i]['userName'] = userName[0].name
                let arr = JSON.parse(result[i].goods_info)
                for (let j in arr) {
                    let shopMsg = await mysql.connect('select * from `goods` where `id` = ?', [arr[j].id])
                    arr[j].shop = shopMsg[0]

                    arr[j].shop.view_picture = await mysql.connect(SQLgetGoodsViewPicture, [arr[j].id])
                    arr[j].shop.message_picture = await mysql.connect(SQLgetGoodsMessagePicture, [arr[j].id])
                    result[i].goods_info = arr
                }
            }
            JsonWrite(res, result)
        } else {
            JsonWrite(res, [])
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})
// 更改订单状态
router.post('/updateOrderStatus', async (req, res) => {
    let params = req.body
    try {
        let result = await mysql.connect('update `order` set `status` = ?, `change_time` = ? where `id` = ?', [params.status, params.date, params.id])
        if (result.changedRows !== 0) {
            JsonWrite(res, { success: true })
        } else {
            JsonWrite(res, { success: false })
        }
    } catch (error) {
        JsonWrite(res, error)
    }
})
module.exports = router
