<template>
  <section class="app_header primary-bg">
    <div class="search-bar">
      <van-row>
        <van-col :span="3">
          <i class="iconfont icon-location header__bar-icon"></i>
        </van-col>
        <van-col :span="17">
          <div class="header__inner-wrap">
            <i class="iconfont icon-search icon-prefix default-color"></i>
            <input type="text" class="header__search-inner"/>
            <van-button round size="small" class="icon-suffix header__search-btn">搜索</van-button>
          </div>
        </van-col>
        <van-col :span="4">
          <i class="iconfont icon-scan_light header__bar-icon"></i>
        </van-col>
      </van-row>
    </div>
  </section>
</template>
<script>
export default {
  name: "appHeader",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.app_header {
  height: 3rem;
  line-height: 3rem;
  font-size: 1.2rem;
  font-size: 0;
  overflow: hidden;
}
.header__inner-wrap {
  position: relative;
  white-space:nowrap
}
.app_header .icon-prefix {
  left: 0.5rem;
}
.app_header .header__search-btn {
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  background-image: linear-gradient(to top right, #ff880d, #ff5602);
  color: #fff;
}

.header__search-inner {
  width: 100%;
  height: 2rem;
  border: 1px solid #fff;
  border-radius: 2rem;
  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  text-indent: 2em;
}
.header__bar-icon {
  color: #fff;
  font-size: 1.4rem;
}
</style>
