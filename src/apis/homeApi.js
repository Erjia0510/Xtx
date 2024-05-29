import httpInstance from "@/utils/http";


export function getHomeApi() {
  return httpInstance({
    url: '/home/new'
  })
}

export const getHotApi = () => {
  return httpInstance({
    url: 'home/hot'
  })
}