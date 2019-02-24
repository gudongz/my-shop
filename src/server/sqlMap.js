const sqlMap = {
    test: {
        getAll: 'select * from goods'
    },
    app: {
        getHotGoods: 'SELECT * FROM goods WHERE hot = ?',
        getAllGoods: 'SELECT * FROM goods'
    }
}

module.exports = sqlMap
