<template>
  <div class="applyEntry">
    <button class="appyBtn" @click="navigateToApply">参会代表报名</button>
    <button class="appyBtn" @click="navigateToApply2">参展商报名</button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToApply() {
      this.$router.push('/apply')
    },
    navigateToApply2() {
      this.$router.push('/companyApply')
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>