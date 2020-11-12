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
      		{id:'001',url:"http://pro.statics.techuangyi.com/2018/03/19/rzjEdGP5GErJCTp4PksaM3Kb.jpg?x-oss-process=image/resize,m_lfit,w_1366,h_0"},
      		{id:'002',url:"http://5b0988e595225.cdn.sohucs.com/images/20180823/1409c77622564d959077dd6000246cb5.jpeg"},
      		{id:'003',url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2576386341,3002037678&fm=15&gp=0.jpg"}
      	],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:5000,
          loop:true
          // Some Swiper option/callback...
        }
      }
    }
  }
</script>

<style scoped>
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
	}
	.swiper-pagination{
		background:#f40 !important;
	}
</style>