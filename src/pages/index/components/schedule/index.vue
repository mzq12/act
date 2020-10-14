<template>
  <div class="scheduleList">
    <h4 class="title">日程安排</h4>
    <div
      class="scheduleListItem"
      v-for="(item, index) in scheduleList"
      :key="index"
    >
      <div class="title">
        <span class="index">0{{ index + 1 }}</span>
        <div class="content">
          <div class="time">{{ item.name }} {{ item.time }}</div>
          <div class="speaker">{{ item.speaker }}</div>
        </div>
      </div>
      <div class="steps">
        <div class="step" v-for="(val, idx) in item.steps" :key="idx">
          <span class="stepIndex">{{ idx + 1 }}、</span>{{ val.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexScheduleList',
  data() {
    return {
      scheduleList: [
        {
          name: '开幕式',
          time: '9:00-9:40 (2020-10-28)',
          speaker: '张奇  世界卫生组织传统  补充和整合医学处协调员',
          steps: [
            { desc: '葛西健（Takeshi Kasai）世界卫生组织西太平洋地区主任致词。' },
            { desc: '葛西健（Takeshi Kasai）世界卫生组织西太平洋地区主任致词。' }
          ]
        },
        {
          name: '开幕式',
          time: '9:00-9:40 (2020-10-28)',
          speaker: '张奇  世界卫生组织传统  补充和整合医学处协调员',
          steps: [
            { desc: '葛西健（Takeshi Kasai）世界卫生组织西太平洋地区主任致词。' },
            { desc: '葛西健（Takeshi Kasai）世界卫生组织西太平洋地区主任致词。' }
          ]
        },
        {
          name: '开幕式',
          time: '9:00-9:40 (2020-10-28)',
          speaker: '张奇  世界卫生组织传统  补充和整合医学处协调员',
          steps: [
            { desc: '葛西健（Takeshi Kasai）世界卫生组织西太平洋地区主任致词。' },
            { desc: '葛西健（Takeshi Kasai）世界卫生组织西太平洋地区主任致词。' }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
@import url("./index.css");
</style>