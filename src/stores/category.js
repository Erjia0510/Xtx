import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layoutApi.js'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  //导航列表的逻辑
  const categoryList = ref([])
  const getCategory = async () => {

    const res = await getCategoryAPI()
    // console.log(res);
    categoryList.value = res.data.result
  }

  return { categoryList, getCategory }
})
