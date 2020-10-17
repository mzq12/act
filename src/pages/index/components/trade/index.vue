<template>
  <div class="trade">
    <h4 class="title">产业和服务贸易</h4>
    <div class="gallery">
      <div
        class="pic"
        v-for="(val, idx) in pics"
        :key="idx"
        @click="navigateToDetail(val.id)"
      >
        <img :src="joinPrefix(val.cp_logo)" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { getCompanyLogoes } from '../../../../apis'
export default {
  data() {
    return {
      pics: []
    }
  },
  methods: {
    joinPrefix(src) {
      return 'http://wfas.org.cn/' + src
    },
    navigateToDetail(id) {
      this.$router.push({ path: 'company', query: { tid: id } })
    }
  },
  created() {
    getCompanyLogoes().then((res) => {
      console.log(res)
      if (res.data.code === 0) {
        this.pics = res.data.data
      }
    })
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>