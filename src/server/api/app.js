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

// 获取全部热门商品
router.get('/getHotGoods', (req, res) => {
    let sql = $sql.app.getHotGoods
    let params = req.query
    mysql.connect(sql, [params.hot], (result) => {
        if (result) {
            JsonWrite(res, result)
        }
    })
})

router.get('/getAllGoods', (req, res) => {
    let sql = $sql.app.getAllGoods
    mysql.connect(sql, false, (result) => {
        if (result) {
            JsonWrite(res, result)
        }
    })
})
module.exports = router
