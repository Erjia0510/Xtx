import httpInstance from "@/utils/http";


export const getGoodsApi = () => {
  return httpInstance({
    url: '/home/goods'
  })
}