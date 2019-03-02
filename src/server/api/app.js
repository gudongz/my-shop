let express = require('express')
let $sql = require('../sqlMap')
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

const SQLgetGoodsViewPicture = $sql.app.getGoodsViewPicture
const SQLgetGoodsMessagePicture = $sql.app.getGoodsMessagePicture
// 获取全部热门商品
router.get('/getHotGoods', async (req, res) => {
    let sql = $sql.app.getHotGoods
    let params = req.query
    let result = await mysql.connect(sql, [params.hot])
    for (let i in result) {
        result[i].view_picture = await mysql.connect(SQLgetGoodsViewPicture, [result[i].id])
        result[i].message_picture = await mysql.connect(SQLgetGoodsMessagePicture, [result[i].id])
    }
    JsonWrite(res, result)
})

// 根据 id 获取商品
router.get('/getGoodsById', async (req, res) => {
    let sql = $sql.app.getGoodsById
    let params = req.query
    let result = await mysql.connect(sql, [params.id])
    result[0].view_picture = await mysql.connect(SQLgetGoodsViewPicture, [params.id])
    result[0].message_picture = await mysql.connect(SQLgetGoodsMessagePicture, [params.id])
    JsonWrite(res, result)
})
// router.get('/getAllGoods', (req, res) => {
//     let sql = $sql.app.getAllGoods
//     mysql.connect(sql, false, (result) => {
//         if (result) {
//             JsonWrite(res, result)
//         }
//     })
// })

// app端 用户登陆
router.post('/login', async (req, res) => {
    let sql = $sql.app.login
    let params = req.body
    let result = await mysql.connect(sql, [params.phone])
    if (!result[0]) {
        JsonWrite(res, '该账户不存在')
    } else {
        if (result[0].password === params.password) {
            JsonWrite(res, result)
        } else {
            JsonWrite(res, '密码错误')
        }
    }
})
// app端 注册
router.post('/register', async (req, res) => {
    let sql = $sql.app.register
    let testPhoneSql = $sql.app.login
    let getUserInfo = $sql.app.getUserInfo
    let params = req.body
    let result = await mysql.connect(testPhoneSql, [params.phone])
    if (!result[0]) {
        let result = await mysql.connect(sql, [params.phone, params.phone, params.password])
        if (result) {
            let userMsg = await mysql.connect(getUserInfo, [result.insertId])
            JsonWrite(res, userMsg)
        } else {
            JsonWrite(res, '注册失败')
        }
    } else {
        JsonWrite(res, '该账户已存在')
    }
})
module.exports = router
