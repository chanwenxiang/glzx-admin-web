import { defineStore } from 'pinia'
import {reqLogin} from '@/api/user'
import type { loginFormData,loginResponseData } from '@/api/user/type'
import { UserState } from './type'

let useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            token: localStorage.getItem('TOKEN') || ''
        }
    },
    getters: {
        
    },
    actions: {
         async userLogin(value: loginFormData) {
            let result: loginResponseData = await reqLogin(value)
               if(result.code == 200){
                // 登录成功
                   this.token = (result.data.token as string);
                //本地存储
                localStorage.setItem('TOKEN',(result.data.token as string))
                return "ok";
               }else{
                // 登录失败
                return Promise.reject(new Error(result.data.message))
               }
        }
    }
})

export default useUserStore;