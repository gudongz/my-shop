let models = require('../DB')
let express = require('express')
let router = express.Router()
let mysql = require('mysql')
let $sql = require('../sqlMap')

// 连接数据库

let conn = mysql.createConnection(models.mysql)

conn.connect()

let JsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '00001',
            msg: '操作失败'
        })
    } else {
        res.json(ret)
    }
}
// 测试
router.get('/getAll', (req, res) => {
    let sql = $sql.test.getAll
    conn.query(sql, function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result) {
            console.log('获取所有用户成功')
            JsonWrite(res, result)
        }
    })
})

module.exports = router
