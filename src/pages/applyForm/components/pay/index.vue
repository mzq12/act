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
        <el-tab-pane label="转账汇款" name="second">转账汇款</el-tab-pane>
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