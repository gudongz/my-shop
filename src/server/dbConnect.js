
// 数据库连接
let mysql = require('mysql')
let db = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shop',
    port: '3306'
}

exports.connect = (sql, params, callback) => {
    let conn = mysql.createConnection(db)
    conn.connect()
    console.log('connect database is success!')
    conn.query(sql, params, (error, result) => {
        if (error) {
            console.log('[select error - ]', error.message)
            return
        }
        callback(result)
    })
    conn.end()
    console.log('end database is success!')
}
