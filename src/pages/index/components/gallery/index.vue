<template>
  <div class="gallery">
    <h4 class="title">现场图集</h4>
    <div class="galleryList">
      <div class="galleryListItem" v-for="(item, index) in guests" :key="index">
        <img :src="item.img_url" @click="toGallery(item.id)" />
        <p class="subTitle">{{ item.images_title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getGallery } from '../../../../apis'
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
    formatGallery(gallery) {
      gallery.forEach((pic) => {
        pic.img_url = JSON.parse(pic.images_url)[0]
      })
      return gallery
    }
  },
  created() {
    getGallery().then((res) => {
      console.log(res)
      if (res.data.code === 0) {

        this.guests = this.formatGallery(res.data.data)
      }
    })
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>