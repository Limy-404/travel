<template>
	<div class='weekend'>
		<div class="title">周末特惠</div>
		<ul>
			<li class="item border-bottom" v-for='(item,index) of weekendList' :key='index'>
				<img :src='item.url' alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<p class="price">￥{{item.price}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeWeekend',
		props:{
			weekendList:Array
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang='less'>
	.weekend{
		width:100%;
		margin-top:0.6rem;
		.title{
			padding:0.5rem;
			background:#eee;
			font-weight:bold;
		}
		ul{
			display:flex;
			flex-wrap:wrap;
			overflow: hidden;
			padding:0.6rem;
		}
		.item{
			// height:6rem;
			width:48%;
			overflow: hidden;
			// padding:0.5rem;
			box-sizing: border-box;
			// text-align:center;
			&:nth-child(2n){
				margin-left:0.8rem;
			}
			img{
				width:100%;
				border-radius:0.3rem;
				// height:4.3rem;
				// margin:0 0.5rem;
			}
			
			.item-info{
				display:flex;
				flex-direction: column;
				padding:0.5rem;
				min-width: 1rem;
				.item-title{
					color:#333;
					height:1.3rem;
					line-height: 1.3rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.item-desc{
					color:#ccc;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					height:1.3rem;
					line-height: 1.3rem;
				}
				.price{
					color:#ff632b;
					margin-top:0.5rem;
					font-weight:bold;
				}
			}
		}
	}
</style>