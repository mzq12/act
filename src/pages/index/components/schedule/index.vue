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
          name: '参会代表注册；世界针联执委会会议；中国针灸学会专委会成立或换届会；',
          time: '(2020-10-28)',
          speaker: '焦点：参会代表注册',
          steps: [
            { desc: '参会代表报到注册、研习班、展览' },
            { desc: '世界针联第九届执委会第四次会议' },
            { desc: '中国针灸学会专委会成立大会或换届会' }
          ]
        },
        {
          name: '世界针灸学会联合会2020国际针灸学术研讨会 开幕式',
          time: '(2020-10-29)',
          speaker: '焦点：开幕式、分论坛、',
          steps: [
            { desc: '世界针灸周“中医针灸”申遗十周年特别活动暨 世界针灸学会联合会2020国际针灸学术研讨会开幕式' },
            { desc: '主题发言、展览' }
          ]
        },
        {
          name: '分论坛、展览；大会闭幕式',
          time: '(2020-10-30)',
          speaker: '焦点：分论坛、展览',
          steps: [
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