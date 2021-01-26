import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { createRouter } from './router'
import { config } from '../config.js'

Vue.use(VueMeta, {
  keyName: 'head',
  refreshOnceOnNavigation: true
})

Vue.prototype.config = config

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

export async function createApp ({
          beforeApp = () => {},
          afterApp = () => {}
        } = {}) {
          const router = createRouter()
          
          
          await beforeApp({
            router,
            
            
          })

          const app = new Vue({
  router,
  render: h => h(App)
})

          const result = {
            app,
            router,
            
            
          }

          await afterApp(result)

          return result
        }
