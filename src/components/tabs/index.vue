<template>
  <div class="tabs">
    <div class="tab">聚焦大会</div>
    <div class="tab">活动内容</div>
    <div class="tab">日程安排</div>
    <div class="tab" @click="navigateToApply">我的报名</div>
    <div class="tab">现场图集</div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToApply() {
      this.$router.push('/order')
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>