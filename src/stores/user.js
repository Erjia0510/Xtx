//管理用户数据

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/userApi'
export const useUserStore = defineStore('user', () => {

  const userInfo = ref({})

  const getUserInfo = async ({ account, password }) => {
    const res = await loginApi({ account, password })

    userInfo.value = res.data.result
  }

  return {
    userInfo,
    getUserInfo
  }


}, {
  persist: true,
}
)