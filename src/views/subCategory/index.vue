<script setup>
import { getCategoryFilterApi } from '@/apis/categoryApi'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getSubCategoryAPI } from '@/apis/categoryApi'
import Goodsitem from '../Home/components/Goodsitem.vue';


const Route = useRoute()
const categoryData = ref([])
const getCategoryDate = async () => {

  const res = await getCategoryFilterApi(Route.params.id)
  categoryData.value = res.data.result
}

onMounted(() => {
  getCategoryDate()
})
//获取基础裂变数据渲染
const goodlists = ref([])
const reqData = ref({
  categoryId: Route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  goodlists.value = res.data.result.items


}
onMounted(() => {
  getGoodList()
})





const tabchange = () => {
  reqData.value.page = 1
  getGoodList()
}

const disabled = ref(false)
const load = async () => {
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)
  console.log(goodlists.value);
  goodlists.value = [...goodlists.value, ...res.data.result.items]

  if (res.data.result.items.length == 0) {
    disabled.value = true
  }

}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabchange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <Goodsitem v-for="item in goodlists" :good="item" :key="item.id"></Goodsitem>


      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>