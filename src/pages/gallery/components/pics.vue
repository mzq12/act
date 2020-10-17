<template>
  <div class="gallery_container">
    <h4 class="title">会场洽谈合影</h4>
    <div class="gallery_pics">
      <div class="pic" v-for="(item, index) in pics" :key="index">
        <img :src="item" @click="preview(item)" />
        <!--  <p class="subTitle">{{ item.position }}</p> -->
      </div>
    </div>
    <div class="modal" v-if="preivewImgSrc" @click="close">
      <img :src="preivewImgSrc" @click="close" />
    </div>
  </div>
</template>
<script>
import { getGalleryDetail } from '../../../apis'
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
    getGalleryDetail(galleryId).then((res) => {
      if (res.data.code === 0) {
        this.pics = JSON.parse(res.data.data.images_url)
      }
    })

  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>