<!--
 * @Date: 10/02/2021 20.10.20 +0800
 * @Author: KnowsCount
 * @LastEditTime: 12/02/2021 12.42.19 +0800
 * @FilePath: /qiokian/src/App.vue
-->
<template>
	<div id="app">
		<!-- 使用组件 -->
		<Figures />
	</div>
</template>

<script>
/* eslint-disable */
// 引用组件
import Figures from '@/components/figures.vue'

export default {
	components: {
		Figures,
	}
}
</script>

<style lang="less">
</style>
