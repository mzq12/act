<template>
  <div class="articlePage">
    <banner></banner>
    <tabs></tabs>
    <div class="articleContiner">
      <div class="bannerImg">
        <img
          src="https://images.pexels.com/photos/4993043/pexels-photo-4993043.jpeg"
          alt=""
        />
      </div>
      <div class="articleContent">
        <h4 class="title">“国际针灸学术研讨会”是世界针联在非选举年</h4>
        <p class="detail">
          “国际针灸学术研讨会”是世界针联在非选举年举办的国际性中医药针灸专业学术会议。在国家中医药管理局、世界卫生组织等机构的支持下，世界针联国际针灸学术研讨会自1987年起已成功举办27次，已成为世界上影响力最大的中医药针灸领域学术活动，是推动中医药针灸国际学术发展和国际交流合作的重要平台。2020年恰“中医针灸”被列入联合国教科文组织人类非物质文化遗产代表作名录十周年，举办国际针灸学术研讨会具有特殊意义。
        </p>
      </div>
    </div>
    <newsList></newsList>
    <bfooter></bfooter>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import bfooter from '../../components/footer/index'
import tabs from '../../components/tabs/index'
import newsList from './components/newsList/index'
export default {
  name: 'index',
  components: {
    banner,
    tabs,
    newsList,
    bfooter
  }
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
  font-size: 13px;
  color: rgb(88 88 88);
  line-height: 23px;
}
</style>