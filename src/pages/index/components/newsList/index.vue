<template>
  <div class="newsList">
    <div class="listItem" v-for="(item, index) in newsList" :key="index">
      <div class="img">
        <img :src="item.imgSrc" />
      </div>
      <div class="content">
        <h4 class="title">{{ item.title }}</h4>
        <div class="desc">{{ item.sponsor }} {{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexNewsList',
  data() {
    return {
      newsList: [
        {
          imgSrc: 'https://3.share.photo.xuite.net/tva0379/13d6d11/19795424/1118827569_m.jpg',
          title: '国际针灸学术研讨会”是世界针联在非选举年举办的国际性中医药针灸专业学术会议。',
          sponsor: '针灸联合会',
          time: '10月7日 15:00'
        },
        {
          imgSrc: 'https://3.share.photo.xuite.net/tva0379/13d6d11/19795424/1118827569_m.jpg',
          title: '国际针灸学术研讨会”是世界针联在非选举年举办的国际性中医药针灸专业学术会议。',
          sponsor: '针灸联合会',
          time: '10月7日 15:00'
        },
        {
          imgSrc: 'https://3.share.photo.xuite.net/tva0379/13d6d11/19795424/1118827569_m.jpg',
          title: '国际针灸学术研讨会”是世界针联在非选举年举办的国际性中医药针灸专业学术会议。',
          sponsor: '针灸联合会',
          time: '10月7日 15:00'
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>