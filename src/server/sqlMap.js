const sqlMap = {
    test: {
        getAll: 'select * from goods'
    },
    app: {
        getHotGoods: 'SELECT * FROM goods WHERE hot = ?',
        getAllGoods: 'SELECT * FROM goods',
        getGoodsViewPicture: 'SELECT * FROM view_picture WHERE goods_id = ?',
        getGoodsMessagePicture: 'SELECT * FROM message_picture WHERE goods_id = ?',
        getGoodsById: 'select * from goods where id = ?', // 根据id获取商品信息
        login: 'select * from app_user where phone = ?', // app端 登陆
        register: 'insert into app_user (name, phone, password) value (?, ?, ?)', // app端注册
        getUserInfo: 'select * from app_user where id = ?', // 根据用户id获取user信息
        // 添加订单
        addOrder: 'insert into `order` (user_id, order_number, goods_info, status, money, num, address, name, phone, create_time, change_time) value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    }
}

module.exports = sqlMap
