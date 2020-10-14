<template>
  <div class="gallery_container">
    <h4 class="title">会场洽谈合影</h4>
    <div class="gallery_pics">
      <div class="pic" v-for="(item, index) in pics" :key="index">
        <img :src="item.imgSrc" @click="preview(item.imgSrc)" />
        <p class="subTitle">{{ item.position }}</p>
      </div>
    </div>
    <div class="modal" v-if="preivewImgSrc" @click="close">
      <img :src="preivewImgSrc" @click="close" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pics: [],
      preivewImgSrc: ""
    }
  },
  methods: {
    preview(src) {
      this.preivewImgSrc = src
    },
    close() {
      this.preivewImgSrc = ''
    }
  },
  created() {
    const galleryId = sessionStorage.getItem('galleryId')
    setTimeout(() => {
      this.pics = [
        {
          imgSrc: require('../../../assets/guest1.jpg'),
          position: '世界卫生组织传统补充和整合医学处协调员',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest2.jpg'),
          position: '世界卫生组织西太平洋地区主任',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest3.jpg'),
          position: '世界卫生组织驻华代表',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest4.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest1.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest2.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest3.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
        {
          imgSrc: require('../../../assets/guest4.jpg'),
          position: '国际标准化组织中医药技术委员会ISO/TC 249主席',
          id: 1,
        },
      ]
    }, 1000)
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>