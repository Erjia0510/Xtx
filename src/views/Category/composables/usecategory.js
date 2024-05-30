import { getCategoryApi } from '@/apis/categoryApi.js'
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';



export function useCategory() {
  // 获取当前路由
  const categoryList = ref([])
  const route = useRoute()
  const getcategory = async (id = route.params.id) => {
    const res = await getCategoryApi(id)
    console.log(res);
    categoryList.value = res.data.result
  }
  onMounted(() => {
    getcategory()
  })
  // 路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getcategory(to.params.id)
  })
  return { categoryList }
}