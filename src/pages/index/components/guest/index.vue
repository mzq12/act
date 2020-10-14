<template>
  <div class="guest">
    <h4 class="title">邀请嘉宾</h4>
    <div class="guestList">
      <div class="guestListItem" v-for="(item, index) in guests" :key="index">
        <img :src="item.imgSrc" />
        <p class="subTitle">{{ item.position }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexGuests',
  data() {
    return {
      guests: [
        {
          imgSrc: require('../../../../assets/guest1.jpg'),
          position: '世界卫生组织传统补充和整合医学处协调员'
        },
        {
          imgSrc: require('../../../../assets/guest2.jpg'),
          position: '世界卫生组织西太平洋地区主任'
        },
        {
          imgSrc: require('../../../../assets/guest3.jpg'),
          position: '世界卫生组织驻华代表'
        },
        {
          imgSrc: require('../../../../assets/guest4.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席'
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>