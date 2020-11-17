<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList='swiperList'></home-swiper>
		<home-menu :iconList='iconList'></home-menu>
		<home-recommend :recommendList='recommendList'></home-recommend>
		<home-weekend :weekendList='weekendList'></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from '../../components/home/HomeHeader.vue'
	import HomeSwiper from '../../components/home/HomeSwiper.vue'
	import HomeMenu from '../../components/home/HomeMenu.vue'
	import HomeRecommend from '../../components/home/HomeRecommend.vue'
	import HomeWeekend from '../../components/home/HomeWeekend.vue'
	export default {
		data(){
			return {
				swiperList:[],
				recommendList:[],
				weekendList:[],
				iconList:[]
			}
		},
		methods:{
			getHomeInfo(){
				this.$axios.get('data/home.json').then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				const data = res.data.data;
				if(data){
					this.swiperList = data.swiperList;
					this.recommendList = data.recommendList;
					this.weekendList = data.weekendList;
					this.iconList = data.iconList;
				}
			}
		},
		mounted(){
			this.getHomeInfo()
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeMenu,
			HomeRecommend,
			HomeWeekend
		}
	}
</script>

<style>
	
</style>