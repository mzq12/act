<template>
  <div class="companyPage">
    <banner></banner>
    <tabs></tabs>
    <div class="companyContiner">
      <div class="companyContent">
        <h4 class="title">公司简介</h4>
        <p class="detail">
          “国际针灸学术研讨会”是世界针联在非选举年举办的国际性中医药针灸专业学术会议。在国家中医药管理局、世界卫生组织等机构的支持下，世界针联国际针灸学术研讨会自1987年起已成功举办27次，已成为世界上影响力最大的中医药针灸领域学术活动，是推动中医药针灸国际学术发展和国际交流合作的重要平台。2020年恰“中医针灸”被列入联合国教科文组织人类非物质文化遗产代表作名录十周年，举办国际针灸学术研讨会具有特殊意义。
        </p>
      </div>
      <div class="companyGallery">
        <div class="intro">
          <img
            class="pic"
            src="https://images.pexels.com/photos/5531203/pexels-photo-5531203.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <p class="subtitle">与嘉宾会场洽谈合影</p>
        </div>
        <div class="intro">
          <img
            class="pic"
            src="https://images.pexels.com/photos/5531203/pexels-photo-5531203.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <p class="subtitle">与嘉宾会场洽谈合影</p>
        </div>
        <div class="intro">
          <img
            class="pic"
            src="https://images.pexels.com/photos/5531203/pexels-photo-5531203.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <p class="subtitle">与嘉宾会场洽谈合影</p>
        </div>
        <div class="intro">
          <img
            class="pic"
            src="https://images.pexels.com/photos/5531203/pexels-photo-5531203.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <p class="subtitle">与嘉宾会场洽谈合影</p>
        </div>
        <div class="intro">
          <img
            class="pic"
            src="https://images.pexels.com/photos/5531203/pexels-photo-5531203.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <p class="subtitle">与嘉宾会场洽谈合影</p>
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
export default {
  name: 'index',
  components: {
    banner,
    tabs
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
}
.companyContiner .companyGallery .subtitle {
  margin: 0;
  font-size: 12px;
  color: rgb(88 88 88);
}
</style>