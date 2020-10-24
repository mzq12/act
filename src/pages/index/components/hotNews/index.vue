<template>
  <div class="hotNews">
    <h4 class="title">
      最热新闻
      <span @click="navigateMore">更多>></span>
    </h4>
    <div class="hotNewsList">
      <p
        class="newsListItem"
        v-for="(item, index) in news"
        :key="index"
        @click="navigateTodetail(item.nid)"
      >
        <span class="index" :class="{ red: index <= 2 }">{{ index + 1 }}</span>
        {{ item.news_title }}
      </p>
    </div>
  </div>
</template>
<script>
import { getHotNews } from '../../../../apis'
export default {
  name: 'indexHotNews',
  data() {
    return {
      news: [

      ]
    }
  },
  methods: {
    navigateTodetail(nid) {
      this.$router.push({ path: 'article', query: { nid: nid } })
    },
    navigateMore() {
      window.location.href = 'http://wfas.org.cn/news/list.html?cid=50'
    }
  },
  created() {
    getHotNews().then((res) => {
      console.log(res)
      if (res.data.code === 0) {
        this.news = res.data.data
      }
    })
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>