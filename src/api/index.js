import { get, post } from '../axios/index'

/********************************************************
 * 登陆 api
 ********************************************************/

// 登陆
export const apiLogin = (params) => { return get('/api/login', params) }
