<template>
  <div class="payInfo">
    <div class="infoCotainer">
      <div class="total">
        <span class="total_label">支付总额：</span>
        <span class="total_number">￥3780.00</span>
      </div>
      <el-tabs type="card" v-model="type">
        <el-tab-pane label="微信支付" name="0">
          <el-checkbox v-model="checked" disabled>微信支付</el-checkbox>
          <button class="payBtn" @click="redirect">立即支付</button>
        </el-tab-pane>
        <el-tab-pane label="转账汇款" name="1">
          <div class="transforInfo">
            <div class="line">
              <span class="label"> 账户名称: </span>
              <span class="content"> 世界针灸学会联合会 </span>
              <p class="subtitle">
                (World Federation of Acupuncture-Moxibustion Societies)
              </p>
            </div>
            <div class="line">
              <span class="label"> 账户账号: </span>
              <span class="content"> 0200 0043 0901 4478 412 </span>
              <p class="subtitle">
                Bei Xin Qiao Subbranch of Beijing Branch of Industrialand
                Commercial Bank of China
              </p>
            </div>
            <div class="line">
              <span class="label"> 中国工商银行北京北新桥支行 </span>
              <p class="subtitle">SWIFT CODE: ICBKCNBJBJM</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      value: '0'
    }
  },
  data() {
    return {
      checked: true
    }
  },
  methods: {
    redirect() {
      var redirect_urls = encodeURIComponent("http://wfas.org.cn/#/companyApply");
      var urls = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf83290b7354115e0&redirect_uri=" + redirect_urls + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
      window.location.href = urls;
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>