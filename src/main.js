/*
 * @Date: 10/02/2021 17.44.40 +0800
 * @Author: KnowsCount
 * @LastEditTime: 12/02/2021 12.38.50 +0800
 * @FilePath: /qiokian/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
