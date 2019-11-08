<template>
  <section>
    <van-row type="flex" justify="space-around">
      <van-col span="12">
        <div class="goods-wrap">
          <van-image width="100" height="100" lazy-load :src="img" />
        </div>
      </van-col>
      <van-col span="12">span: 6</van-col>
    </van-row>
  </section>
</template>
<script>
import { fetchList } from "@/api";
import banner1 from '@/assets/img/banner1.png'
export default {
  name: "Shopping",
  data() {
    return {
      msg: "Welcome",
      dataList: [],
      img: banner1
    };
  },
  created() {
    this.handleGetList();
  },
  methods: {
    async handleGetList() {
      console.log(fetchList);
      this.dataList = await new Promise(resolve => {
        fetchList().then(res => {
          console.log(res);
          resolve(res);
        });
      });
    }
  }
};
</script>
<style>
</style>
