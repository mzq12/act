<template>
  <div class="galleryPage">
    <banner></banner>
    <tabs></tabs>
    <aform></aform>
    <pay></pay>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import tabs from '../../components/tabs/index'
import aform from './components/form'
import pay from './components/pay/index'
export default {
  name: 'gallery',
  components: {
    banner,
    tabs,
    aform,
    pay
  }
}
</script>
<style>
.galleryPage {
  background: #f3f3f4;
}
</style>