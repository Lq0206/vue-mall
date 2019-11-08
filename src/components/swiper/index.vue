<template>
  <section class="app-banenr-wrap clearfix">
    <van-swipe :autoplay="2000" class="custorm-swiper" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img v-lazy="item" width="100%" class="banner-img"/>
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.png'
export default {
  name: "banner",
  data() {
    return {
      images: [banner1, banner2, banner1]
    };
  }
};
</script>

<style lang="scss" scoped>
.app-banenr-wrap {
  padding: 0.6rem;
  overflow: hidden;
}
.custorm-swiper {
  display: block;
  height: 10rem;
  margin: 0 auto;
  background: #eaeaea;
  border: 0;
  max-height: 10rem;
  border-radius: 0.8rem;
  -webkit-border-radius: 0.8rem;
  -moz-border-radius: 0.8rem
}
</style>
