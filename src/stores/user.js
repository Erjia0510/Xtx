//管理用户数据

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/userApi'
export const useUserStore = defineStore('user', () => {

  const userInfo = ref({})

  const getUserInfo = async ({ account, password }) => {
    const res = await loginApi({ account, password })
    console.log(res);
    userInfo.value = res.data.result
  }
  const clearUserInfo = async () => {
    userInfo.value = {}

  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }


}, {
  persist: true,
}
)