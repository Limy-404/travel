<template>
	<div class='home'>
		<div class="left">
			<span class='iconfont icon-fanhui'></span>
		</div>
		<div class="search_inp">
			<span class='iconfont icon-sousuo'></span>
			<span class='placeholder'>请输入内容</span>
		</div>
		<div class="right">
			城市
			<span class='iconfont icon-arrow-down'></span>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.home{
		width:100%;
		height:2rem;
		background:#0af;
		display:flex;
		/*text-align:center;*/
		align-items:center;
	}
	.left{
		width:1.6rem;
		float:left;
		color:#fff;
	}
	.right{
		width:3.6rem;
		float:right;
		color:#fff;
	}
	.right>span{
		font-size:0.8rem;
	}
	.search_inp{
		flex:1;
		width:100%;
		height:90%;
		background:#fff;
		border-radius:0.1rem;
		display:flex;
		align-items:center;
		padding-left:0.2rem;
		box-sizing: border-box;
		margin:0 0.3rem;
	}
	.placeholder{
		color:#999;
	}
</style>