//定义懒加载插件

import { useIntersectionObserver } from '@vueuse/core'


export const lazyPlugin = {
  install(app) {

    app.directive('img-lazy', {
      mounted(el, binding) {
        // el:绑定的元素
        // binding：binding.value  指令等号后面的表达式的值
        console.log(el, binding);


        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          },
        )

      }
    })
  }
}

