<template>
  <div class="companyPage">
    <banner></banner>
    <tabs></tabs>
    <div class="companyContiner">
      <div class="companyContent">
        <h4 class="title">公司简介</h4>
        <p class="detail">
          {{ info }}
        </p>
      </div>
      <div class="companyGallery">
        <div class="intro" v-for="(val, idx) in imgs" :key="idx">
          <img class="pic" :src="val" />
          <p class="subtitle">{{ img_intro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import bfooter from '../../components/footer/index'
import tabs from '../../components/tabs/index'
import newsList from './components/newsList/index'
import { getCompanyDetail } from '../../apis'
export default {
  name: 'index',
  components: {
    banner,
    tabs
  },
  data() {
    return {
      img_intro: '',
      info: '',
      imgs: ''
    }
  },
  created() {
    getCompanyDetail(this.$route.query.tid).then((res) => {
      if (res.data.code === 0) {
        this.img_intro = res.data.data.img_intro
        this.info = res.data.data.cp_info
        this.imgs = res.data.data.cp_images.map((src) => {
          return 'http://wfas.org.cn/' + src
        })
      }

    })
  }
}
</script>
<style scoped>
.companyPage {
  background: #f3f3f4;
}
.companyContiner {
  background: #fff;
  margin-bottom: 10px;
  border-top: 1px solid transparent;
}

.companyContiner .companyContent {
  padding: 0 10px 0 10px;
}

.companyContiner .companyContent .title {
  font-size: 16px;
  font-weight: normal;
  text-align: center;
}

.companyContiner .companyContent .detail {
  font-size: 13px;
  color: rgb(88 88 88);
  line-height: 23px;
}

.companyContiner .companyGallery {
  padding: 10px 10px 80px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.companyContiner .companyGallery img {
  width: 168px;
  height: 112px;
  margin-bottom: 6px;
}
.companyContiner .companyGallery .intro {
  margin-bottom: 21px;
  width: 168px;
}
.companyContiner .companyGallery .subtitle {
  margin: 0;
  font-size: 12px;
  color: rgb(88 88 88);
}
</style>