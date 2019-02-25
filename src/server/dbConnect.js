
// 数据库连接
let mysql = require('mysql')
let db = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shop',
    port: '3306'
}

// exports.connect = (sql, params, callback) => {
//     let conn = mysql.createConnection(db)
//     conn.connect()
//     console.log('connect database is success!')
//     conn.query(sql, params, (error, result) => {
//         if (error) {
//             console.log('[select error - ]', error.message)
//             return
//         }
//         callback(result)
//     })
//     conn.end()
//     console.log('end database is success!')
// }
exports.connect = (sql, params) => {
    return new Promise((resolve, reject) => {
        let conn = mysql.createConnection(db)
        conn.connect()
        conn.query(sql, params, (error, result) => {
            if (error) {
                reject(error)
                console.log('[select error - ]', error.message)
            }
            resolve(result)
        })
        conn.end()
    })
}
