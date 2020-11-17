<template>
	<div class='icons'>
		<swiper ref="mySwiper" :options="swiperOptions" v-if='showIcon'>
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="(icon,index) of page" :key="index">
					<div class="icon-img">
						<img :src="icon.url" alt="" class="item-img">
					</div>
					<p>{{icon.text}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		props:{
			iconList:Array
		},
		data(){
			return{
				swiperOptions: {
		      pagination:'.swiper-pagination',
		      autoplay:false,
		      loop:true
		      // Some Swiper option/callback...
		    }
			}
		},
		computed:{
			pages(){
				const pages = [];
				this.iconList.forEach((item,index)=>{
					const page = Math.floor(index/8);
					if(!pages[page]){
						pages[page] = [];
					}
					pages[page].push(item)
				})
				return pages
			},
			showIcon(){
				return this.iconList.length
			}
		}
	}
</script>

<style scoped lang="less">
		
	.icons /deep/.swiper-container{
		height:0;
		padding-bottom:50%;
		font-size:13px;
		/deep/ .swiper-slide{
			display:flex;
			flex-wrap: wrap;
		}
		.icon{
			width:25%;
			height:0;
			padding-bottom: 25%;
			// background: #333;
			position:relative;
			overflow:hidden;
			text-align: center;

			.icon-img{
				width:100%;
				position:absolute;
				top:0.8rem;
				right:0;
				bottom:1rem;
				overflow: hidden;
				img{
					width:50%;
				}
			}
			p{
				position:absolute;
				left:0;
				right:0;
				bottom:0.2rem;
			}
		}
	}
</style>