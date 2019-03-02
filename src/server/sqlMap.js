const sqlMap = {
    test: {
        getAll: 'select * from goods'
    },
    app: {
        getHotGoods: 'SELECT * FROM goods WHERE hot = ?',
        getAllGoods: 'SELECT * FROM goods',
        getGoodsViewPicture: 'SELECT * FROM view_picture WHERE goods_id = ?',
        getGoodsMessagePicture: 'SELECT * FROM message_picture WHERE goods_id = ?',
        getGoodsById: 'select * from goods where id = ?',
        login: 'select * from app_user where phone = ?',
        register: 'insert into app_user (name, phone, password) value (?, ?, ?)',
        getUserInfo: 'select * from app_user where id = ?'
    }
}

module.exports = sqlMap
