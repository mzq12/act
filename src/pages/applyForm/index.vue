<template>
  <div class="galleryPage">
    <banner></banner>
    <tabs></tabs>
    <aform @submitSucc="handleSubmit"></aform>
    <pay v-if="showPay" :type="payType" :price="pay_price"></pay>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import tabs from '../../components/tabs/index'
import aform from './components/form'
import pay from './components/pay/index'
import { getPayConfig } from '../../apis'
import wx from 'weixin-js-sdk'
import md5 from 'md5'
export default {
  name: 'gallery',
  components: {
    banner,
    tabs,
    aform,
    pay
  },
  data() {
    return {
      showPay: false,
      payType: '0',
      pay_price: 0
    }
  },
  methods: {
    handleSubmit(payType) {
      this.showPay = true
      this.payType = payType
      this.pay_price = JSON.parse(sessionStorage.getItem('payInfo')).pay_price
    },
    getSign: (params) => {
      const { nonceStr, timestamp, prepay_id, key } = params
      const stringA = "appId=wxf83290b7354115e0" + "&nonceStr=" + nonceStr + "&package=prepay_id=" + prepay_id + "&signType=MD5&timeStamp=" + timestamp;
      const stringSignTemp = stringA + "&key=" + key;
      const paySign = md5(stringSignTemp).toUpperCase();
      return paySign;
    }
  },
  created() {
    const isCode = location.search.indexOf('code')
    if (isCode > -1) {
      const s1 = location.search.split('&')
      const s2 = s1[0].slice(isCode)
      const code = s2.split('=')[1]
      const url = window.location.href.split('#')[0]//encodeURIComponent()
      const insertId = JSON.parse(sessionStorage.getItem('payInfo')).insert_id
      getPayConfig(code, url, insertId).then(res => {
        let { noncestr, out_trade_no, prepay_id, timestamp, sign } = res.data
        wx.config({
          // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wxf83290b7354115e0', // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature: sign,// 必填，签名
          jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
        });
        const signs = this.getSign({
          timestamp: timestamp,
          nonceStr: noncestr,
          prepay_id: prepay_id,
          key: '2b46d78f0dbbb3988d2b93a84aa2597e',
        })
        wx.chooseWXPay({
          timestamp: timestamp,
          nonceStr: noncestr,
          package: 'prepay_id=' + prepay_id,
          signType: 'MD5',
          paySign: signs, // 支付签名
          success: function (res) {
            this.$message({
              type: 'success',
              message: '支付成功'
            })
          },
          cancel: function (res) {
            console.log(res.errMsg)
          },
          fail: function (res) {
            console.log(JSON.stringify(res))
          }
        })
      })
    }
  }
}
</script>
<style>
.galleryPage {
  background: #f3f3f4;
}
</style>