<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-menu></home-menu>
		<home-recommend></home-recommend>
	</div>
</template>

<script>
	import HomeHeader from './components/HomeHeader.vue'
	import HomeSwiper from './components/HomeSwiper.vue'
	import HomeMenu from './components/HomeMenu.vue'
	import HomeRecommend from './components/HomeRecommend.vue'
	export default {
		data(){
			return {

			}
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeMenu,
			HomeRecommend
		}
	}
</script>

<style>
	
</style>