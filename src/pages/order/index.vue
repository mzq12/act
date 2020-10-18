<template>
  <div class="orderPage">
    <banner></banner>
    <tabs></tabs>
    <div class="orderContainer">
      <h4 class="title">付款信息查询</h4>
      <el-input
        v-model="input"
        placeholder="请输入报名时的手机号或是联系人姓名进行查询"
        size="small"
      ></el-input>
      <button class="queryBtn">查询</button>
    </div>
    <div class="orderResult" v-if="showResult">
      <h4 class="title">订单明细</h4>
      <p class="orderItem">
        <span class="orderItemLeft">订单编号</span>
        <span class="orderItemRight">20200918056111</span>
      </p>
      <p class="orderItem">
        <span class="orderItemLeft">创建时间</span>
        <span class="orderItemRight">2020-09-18</span>
      </p>
      <p class="orderItem">
        <span class="orderItemLeft">类型</span>
        <span class="orderItemRight">展会报名</span>
      </p>
      <p class="orderItem">
        <span class="orderItemLeft">类型</span>
        <span class="orderItemRight"
          >一带一路”国际特色针法传习班（第二期）</span
        >
      </p>
      <p class="orderItem">
        <span class="orderItemLeft">支付金额</span>
        <span class="orderItemRight">￥3100.00</span>
      </p>
    </div>
    <div class="offlieInfo">
      <h5 class="title">线下汇款信息</h5>
      <p class="desc">账户名称:世界针灸学会联合会</p>
      <p class="desc">World Federation of Acupuncture-Moxibustion Societies</p>
      <p class="desc">账号:0200004309014478412</p>
      <p class="desc">
        Bei Xin Qiao Subbranch of Beijing Branch of Industrial and Commercial
        Bank of China（中国工商银行北京北新桥支行）
      </p>
      <p class="desc">SWIFT CODE: ICBKCNBJBJM</p>
    </div>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import tabs from '../../components/tabs/index'
export default {
  name: 'gallery',
  components: {
    banner,
    tabs,
  },
  data() {
    return {
      input: '',
      showResult: true
    }
  }
}
</script>
<style>
@import url("./index.css");
.orderPage {
  background: #f3f3f4;
}
</style>