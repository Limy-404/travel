<template>
	<div class='icons'>
		<swiper ref="mySwiper" :options="swiperOptions">
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
		data(){
			return{
				iconList:[
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',text:'景点门票'},
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/flight.png',text:'景点门票'},
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/train.png',text:'景点门票'},
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/package.png',text:'景点门票'},
					{id:'001',url:'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',text:'景点门票'},
					{id:'001',url:'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',text:'景点门票'},
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/flight.png',text:'景点门票'},
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/flight.png',text:'景点门票'},
					{id:'001',url:'//s.qunarzz.com/homenode/images/touchheader/flight.png',text:'景点门票'},
				],
				swiperOptions: {
		      pagination:'.swiper-pagination',
		      autoplay:7000,
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
					console.log(page)
					if(!pages[page]){
						pages[page] = [];
					}
					pages[page].push(item)
				})
				console.log(pages)
				return pages
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