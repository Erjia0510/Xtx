<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";


//触发获取导航列表action
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";
const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <div>
    <LayoutNav />
    <LayoutHeader />
    <LayoutFixed />
    <!-- 二级路由出口 -->
    <!-- 添加key破环复用机制  强制销毁重建 -->

    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
    <LayoutFooter />
  </div>

</template>