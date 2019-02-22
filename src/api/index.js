import { get, post } from '../axios/index'

// 登陆
export const apiLogin = (params) => { return post('/api/admin/login', params) }

/* * * * * *  系统管理   * * * * * */
// 权限管理  ==> 获取全部权限
export const apiGetAllPower = (params) => { return get('/api/admin/getAllPower', params) }
// 角色管理  ==> 获取全部角色
export const apiGetAllRole = (params) => { return get('/api/admin/getAllRole', params) }
// 角色管理  ==> 获取全部角色
export const apiGetPowerByRoleId = (params) => { return get('/api/admin/getPowerByRoleId', params) }
// 角色管理  ==> 更新角色权限
export const apiEditRolePower = (params) => { return post('/api/admin/editRolePower', params) }
// 角色管理  ==> 角色修改 / 增加
export const apiAddOrUpdateRole = (params) => { return post('/api/admin/addOrUpdateRole', params) }
// 用户管理 ==> 获取全部用户
export const apiGetAdminUserList = (params) => { return get('/api/admin/getAdminUserList', params) }
// 用户管理 ==> 根据用户id获取角色
export const apiGetRoleByUserId = (params) => { return get('/api/admin/getRoleByUserId', params) }
// 用户管理 ==> 增加用户，或 ，修改用户
export const apiUpdateOrAddUser = (params) => { return post('/api/admin/updateOrAddUser', params) }
// 用户管理 ==> 为用户分配角色
export const apiUpdateUserRole = (params) => { return post('/api/admin/updateUserRole', params) }
// 用户管理 ==> 设置用户为无效状态
export const apiDeleteAdminUser = (params) => { return post('/api/admin/deleteAdminUser', params) }

/* * * * * *  商品管理   * * * * * */
// 用户管理 ==> 设置用户为无效状态
export const apiGetGoods = (params) => { return get('/api/admin/getGoods', params) }

// 登陆
// export const apitest = (params) => { return get('/api/test/getAll', params) }
