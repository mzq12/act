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
        <!--  <div class="desc">{{ item.sponsor }} {{ item.time }}</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { getLastedNews, getNewsDetail } from '../../../../apis'

export default {
  name: 'indexNewsList',
  data() {
    return {
      newsList: [

      ]
    }
  },
  methods: {
    navigateTodetail(nid) {
      getNewsDetail(nid).then((res) => {
        if (res.data.code === 0) {
          this.$emit('changeDetail', res.data.data)
        }
      })
    }
  },
  created() {
    getLastedNews().then((res) => {
      if (res.data.code === 0) {
        this.newsList = res.data.data
      }
    })
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>