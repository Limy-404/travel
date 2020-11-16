<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-menu></home-menu>
	</div>
</template>

<script>
	import HomeHeader from './components/HomeHeader.vue'
	import HomeSwiper from './components/HomeSwiper.vue'
	import HomeMenu from './components/HomeMenu.vue'
	export default {
		data(){
			return {

			}
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeMenu
		}
	}
</script>

<style>
	
</style>