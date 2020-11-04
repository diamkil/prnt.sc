import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

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
