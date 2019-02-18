import { get, post } from '../axios/index'

/********************************************************
 * 登陆 api
 ********************************************************/

// 登陆
export const apiLogin = (params) => { return post('/api/admin/login', params) }

// 登陆
export const apitest = (params) => { return get('/api/test/getAll', params) }
