<template>
  <div class="tabs">
    <div class="tab" @click="navigateToIndex">聚焦大会</div>
    <div class="tab" @click="navigateToHotel">会议酒店</div>
    <div class="tab" @click="navigateToApply">我的报名</div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToApply() {
      this.$router.push('/order')
    },
    navigateToIndex() {
      this.$router.push('/')
    },
    navigateToHotel() {
      window.location.href = "https://hotel.xmnjdwx.com/hotel/?flat_id=2&hotel_id=367&list_id=455&uid=21715&prev_uid=21715&from=singlemessage&isappinstalled=0&code=091seDkl2kuXO545WVml2JrGMj1seDkj"
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>