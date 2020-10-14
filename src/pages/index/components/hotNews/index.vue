<template>
  <div class="hotNews">
    <h4 class="title">最热新闻</h4>
    <div class="hotNewsList">
      <p class="newsListItem" v-for="(item, index) in news" :key="index">
        <span class="index" :class="{ red: index <= 2 }">{{ index + 1 }}</span>
        {{ item.title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexHotNews',
  data() {
    return {
      news: [
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        },
        {
          title: '在国家中医药管理局 、世界卫生组织等机构的支持下，在国家中医药管理局 、'
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>