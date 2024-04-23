import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import LottieAnimation from 'lottie-web-vue'
import Mixins from './mixins'
import AOS from 'aos'
import 'aos/dist/aos.css'

require('./assets/style/style.css')

Vue.use(LottieAnimation)
Vue.config.productionTip = false
Vue.mixin(Mixins)

new Vue({
  created() {
    AOS.init()
  },
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
