<template>
  <swiper ref="mySwiper" :options="swiperOptions" v-if='showSwiper'>
    <swiper-slide v-for='(item,index) of swiperList'>
      <img :src="item.url" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    props:{
      swiperList:Array
    },
    data() {
      return {
        swiperOptions: {
          pagination:'.swiper-pagination',
          autoplay:5000,
          loop:true
          // Some Swiper option/callback...
        }
      }
    },
    computed:{
      showSwiper(){
        return this.swiperList.length;
      }
    },
    methods:{

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