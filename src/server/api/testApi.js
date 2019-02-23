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

router.get('/getAll', (req, res) => {
    //允许跨域
    // res.header('Access-Control-Allow-Origin', '*')
    // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    // res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    // res.header('Access-Control-Allow-Headers', 'Content-Type')
    let sql = $sql.test.getAll
    mysql.connect(sql, (result) => {
        if (result) {
            JsonWrite(res, result)
        }
    })
})
module.exports = router
