<template>
	<div class='recommend'>
		<div class="title">推荐</div>
		<ul>
			<li class="item border-bottom" v-for='(item,index) of recommendList' :key='index'>
				<img :src='item.url' alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
			recommendList:Array
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang='less'>
	.recommend{
		width:100%;
		margin-top:0.6rem;
		.title{
			padding:0.5rem;
			background:#eee;
			font-weight:bold;
		}
		.item{
			height:6rem;
			display:flex;
			overflow: hidden;
			padding:0.5rem 0;
			box-sizing: border-box;
			img{
				width:7rem;
				height:4.3rem;
				margin:0 0.5rem;
			}
			.item-info{
				flex:1;
				padding-right:0.5rem;
				min-width: 1rem;
				.item-title{
					color:#333;
					height:1.3rem;
					line-height: 1.3rem;
				}
				.item-desc{
					color:#ccc;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					height:1.3rem;
					line-height: 1.3rem;
				}
				button{
					background:#ff632b;
					color:#fff;
					padding:0.2rem 0.5rem;
					border:0;
					margin-top:0.5rem;
					border-radius: 0.2rem;
				}
			}
		}
	}
</style>