<template>
  <div class="newsList">
    <div
      class="listItem"
      v-for="(item, index) in newsList"
      :key="index"
      @click="navigateTodetail(item.nid)"
    >
      <div class="img">
        <img :src="item.news_img" />
      </div>
      <div class="content">
        <h4 class="title">{{ item.news_title }}</h4>
        <!-- <div class="desc">{{ item.sponsor }} {{ item.time }}</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { getLastedNews } from '../../../../apis'
export default {
  name: 'indexNewsList',
  data() {
    return {
      newsList: [

      ]
    }
  },
  created() {
    getLastedNews().then((res) => {
      if (res.data.code === 0) {
        this.newsList = res.data.data
      }
    })
  },
  methods: {
    navigateTodetail(nid) {
      this.$router.push({ path: 'article', query: { nid: nid } })
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>