/*
 * 全局公用函数库
 */

 export const checkLogin = (nextState, replace) => {
    const token = sessionStorage.getItem('login_token')
    if (token && typeof token == 'string') {
        return true
    }
    
    return false
 }