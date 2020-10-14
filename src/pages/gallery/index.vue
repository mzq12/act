<template>
  <div class="galleryPage">
    <banner></banner>
    <tabs></tabs>
    <pics></pics>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import tabs from '../../components/tabs/index'
import pics from './components/pics'
export default {
  name: 'gallery',
  components: {
    banner,
    tabs,
    pics
  }
}
</script>
<style>
.galleryPage {
  background: #f3f3f4;
}
</style>