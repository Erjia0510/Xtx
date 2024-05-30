import httpInstance from "@/utils/http";



export function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance({

    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}
