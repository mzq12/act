<template>
  <div class="articlePage">
    <banner></banner>
    <tabs></tabs>
    <div class="articleContiner">
      <div class="bannerImg">
        <img :src="newsImg" alt="" />
      </div>
      <div class="articleContent">
        <h4 class="title">{{ newsTitle }}</h4>
        <p class="detail" v-html="newsContent">
          {{ newsContent }}
        </p>
      </div>
    </div>
    <newsList @changeDetail="handleDetailChange"></newsList>
    <bfooter></bfooter>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import bfooter from '../../components/footer/index'
import tabs from '../../components/tabs/index'
import newsList from './components/newsList/index'
import { getNewsDetail } from '../../apis'
export default {
  name: 'index',
  components: {
    banner,
    tabs,
    newsList,
    bfooter
  },
  data() {
    return {
      newsImg: "",
      newsTitle: "",
      newsContent: ""
    }
  },
  methods: {
    handleDetailChange(data) {
      this.handleData(data)
    },
    handleData(data) {
      this.newsTitle = data.news_title
      this.newsContent = data.news_content
      this.newsImg = data.news_img
      this.$nextTick(() => {
        document.querySelectorAll('img').forEach((node) => {
          node.style.width = '100%'
        })
      })
    }
  },
  created() {
    getNewsDetail(this.$route.query.nid).then((res) => {
      if (res.data.code === 0) {
        this.handleData(res.data.data)
      }
    })
  },

}
</script>
<style scoped>
.articlePage {
  background: #f3f3f4;
}
.articleContiner {
  background: #fff;
  margin-bottom: 10px;
}
.articleContiner .bannerImg {
  width: 100%;
}
.articleContiner .bannerImg img {
  width: 100%;
}
.articleContiner .articleContent {
  padding: 0 10px 24px 10px;
}

.articleContiner .articleContent .title {
  font-size: 16px;
}

.articleContiner .articleContent .detail {
  width: 100%;
  font-size: 13px;
  color: rgb(88 88 88);
  line-height: 23px;
}

.articleContiner .articleContent .detail img {
  width: 100%;
}
</style>