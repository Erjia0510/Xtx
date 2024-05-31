//component中所有组件全局注册
//通过插件方式
import imgView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'


export const componentPlugins = {
  install(app) {
    //app.component('组件名字'，组件的配置对象)
    app.component('ImgView', imgView)
    app.component('XtxSku', Sku)
  }
}