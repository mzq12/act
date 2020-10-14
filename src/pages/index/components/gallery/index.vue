<template>
  <div class="gallery">
    <h4 class="title">现场图集</h4>
    <div class="galleryList">
      <div class="galleryListItem" v-for="(item, index) in guests" :key="index">
        <img :src="item.imgSrc" @click="toGallery(item.id)" />
        <p class="subTitle">{{ item.position }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexGallery',
  data() {
    return {
      guests: []
    }
  },
  methods: {
    toGallery(id) {
      sessionStorage.setItem('galleryId', id)
      this.$router.push('/gallery')
    },
  },
  mounted() {
    setTimeout(() => {
      this.guests = [
        {
          imgSrc: require('../../../../assets/guest1.jpg'),
          position: '世界卫生组织传统补充和整合医学处协调员',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest2.jpg'),
          position: '世界卫生组织西太平洋地区主任',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest3.jpg'),
          position: '世界卫生组织驻华代表',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest4.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest1.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest2.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest3.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../../assets/guest4.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
      ]
    })
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>