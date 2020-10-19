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
      const s1 = location.search.split('&')
      const s2 = s1[0].slice(isCode)
      const s3 = s2.split('=')[1]
      console.log(s3)
    }
  }
}
</script>
<style>
.galleryPage {
  background: #f3f3f4;
}
</style>