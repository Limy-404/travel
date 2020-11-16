<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for='(item,index) of swiperList'>
    	<img :src="item.url" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
      	swiperList:[
      		{id:'001',url:"//imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg"},
      		{id:'002',url:"//imgs.qunarzz.com/vs_ceph_vcimg/7176acd77332a433af9636eb9a2c338c.jpeg"},
      		{id:'003',url:"//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg"}
      	],
        swiperOptions: {
          pagination:'.swiper-pagination',
          autoplay:5000,
          loop:true
          // Some Swiper option/callback...
        }
      }
    }
  }
</script>

<style scoped lang="less">
	.swiper{
		width:100%;
		height:0;
		padding-bottom:35.55%;
		overflow: hidden;
	}
	.swiper-slide{

	}
	.swiper-slide img{
		width:100%;
		height:145px;
    // margin-bottom:-0.1rem;
	}
	.swiper-pagination /deep/ .swiper-pagination-bullet{
		background:rgba(255,255,255,0.8);
	}
</style>