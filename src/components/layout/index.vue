<template>
  <div class="app-main">
    <app-header></app-header>
    <aside class="search-type-bar">
      <ul class="clearfix">
        <li v-for="item in types" :key="item.id" :class="item.select === true ? 'current' : ''">
          {{ item.title }}
        </li>
        <div class="type-bar-menu-icon"><i class="iconfont icon-sort"></i></div>
      </ul>
    </aside>
    <app-swiper></app-swiper>
    <goodList></goodList>
  </div>
</template>

<script>
// import goodList from '@/components/indexGoodsList'
export default {
  name: "appMain",
  components: {
    'appHeader': () => import('@/components/layout/header'),
    'appSwiper': () => import('@/components/swiper/index'),
    'goodList': () => import('@/components/indexGoodsList')
  },
  data() {
    return {
      types: [
        { title: '首页', id: 1, select: true },
        { title: '数码', id: 2, select: false },
        { title: '男装', id: 3, select: false },
        { title: '女装', id: 4, select: false },
        { title: '食品', id: 5, select: false },
        { title: '生活', id: 6, select: false },
        { title: '生鲜', id: 7, select: false },
        { title: '鞋子', id: 8, select: false },
        { title: '运动', id: 9, select: false }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.search-type-bar {
  width: 100%;
  height: 2rem;
  overflow: hidden;
}
.search-type-bar ul {
  height: 2rem;
  padding-top: 0.5rem;
  white-space: nowrap;
  overflow-x: visible;
  overflow-y: hidden;
  margin-right: 2.2rem;
}

.search-type-bar::-webkit-scrollbar {
  width: 0;
}
.search-type-bar ul li {
  display: inline-block;
  margin: 0 0.8rem;
  transition: transform 0.2s linear;
  zoom: 1;
}
.current {
  transform: scale(1.2, 1.2);
}
.search-type-bar {
  position: relative;
  .type-bar-menu-icon {
    position: absolute;
    right: 0;
    z-index: 1;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    background: red;
    top: 0;
    color: #fff;
  }
}
</style>
