<template>
  <div class="trade">
    <h4 class="title">产业和服务贸易</h4>
    <div class="gallery">
      <div class="pic" v-for="(val, idx) in pics" :key="idx">
        <img :src="val" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pics: [require('../../../../assets/trade1.jpg'), require('../../../../assets/trade2.jpg'),
      require('../../../../assets/trade3.jpg'),
      require('../../../../assets/trade4.jpg'), require('../../../../assets/trade5.jpg'),
      require('../../../../assets/trade6.jpg')]
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>