<template>
  <div class="galleryPage">
    <banner></banner>
    <tabs></tabs>
    <aform @submitSucc="handleSubmit"></aform>
    <pay v-if="showPay" :type="payType"></pay>
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
      payType: '0'
    }
  },
  methods: {
    handleSubmit(payType) {
      this.showPay = true
      this.payType = payType
    }
  },
  created() {
    const isCode = location.search.indexOf('code')
    if (isCode > -1) {
      let nonce = Math.random().toString(36).substr(2)
      //let sign = md5(`appid=${appId}&body=${body}&device_info=WEB&mch_id=${mchId}&nonce_str=${nonce}&key=${key}`).toUpperCase()
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxf83290b7354115e0', // 必填，公众号的唯一标识
        timestamp: Date.now() / 1000, // 必填，生成签名的时间戳
        nonceStr: nonce, // 必填，生成签名的随机串
        signature: '930497a1dc7d0d8b698367e1714e81b7',// 必填，签名
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
      });
      const s1 = location.search.split('&')
      const s2 = s1[0].slice(isCode)
      const code = s2.split('=')[1]
      getPayConfig(code).then(res => {
        console.log(res.data)
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