<template>
  <div class="payInfo">
    <div class="infoCotainer">
      <div class="total">
        <span class="total_label">支付总额：</span>
        <span class="total_number">￥3780.00</span>
      </div>
      <el-tabs type="card">
        <el-tab-pane label="微信支付" name="first">
          <el-checkbox v-model="checked" disabled>微信支付</el-checkbox>
          <button class="payBtn">立即支付</button>
        </el-tab-pane>
        <el-tab-pane label="转账汇款" name="second">
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
  data() {
    return {
      checked: true
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>