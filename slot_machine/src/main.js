import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
// import wheel from './modules/wheel.js'
import store from './store'
// import router from './router';


Vue.config.productionTip = false
Vue.use(Vuex)

// const store = () => new Vuex.Store({
//   modules: {
//       wheel,
//   },

// state: {
// },
// mutations: {
 
// }
// })

new Vue({
   store,
  render: h => h(App),
}).$mount('#app')
// export default store

