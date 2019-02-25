const sqlMap = {
    test: {
        getAll: 'select * from goods'
    },
    app: {
        getHotGoods: 'SELECT * FROM goods WHERE hot = ?',
        getAllGoods: 'SELECT * FROM goods',
        getGoodsViewPicture: 'SELECT * FROM view_picture WHERE goods_id = ?',
        getGoodsMessagePicture: 'SELECT * FROM message_picture WHERE goods_id = ?'
    }
}

module.exports = sqlMap
