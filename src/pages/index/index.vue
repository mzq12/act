<template>
  <div class="indexPage">
    <banner></banner>
    <tabs></tabs>
    <newsList></newsList>
    <hotNews></hotNews>
    <schedule></schedule>
    <guest v-if="false"></guest>
    <gallery></gallery>
    <context></context>
    <trade></trade>
    <applyEntry></applyEntry>
    <bfooter></bfooter>
  </div>
</template>
<script>
import banner from '../../components/banner/index'
import bfooter from '../../components/footer/index'
import tabs from '../../components/tabs/index'
import newsList from './components/newsList/index'
import hotNews from './components/hotNews/index'
import schedule from './components/schedule/index'
import guest from './components/guest/index'
import gallery from './components/gallery/index'
import context from './components/context/index'
import trade from './components/trade/index'
import applyEntry from './components/applyEntry/index'
export default {
  name: 'index',
  components: {
    banner,
    tabs,
    newsList,
    hotNews,
    schedule,
    guest,
    gallery,
    context,
    trade,
    applyEntry,
    bfooter
  }
}
</script>
<style>
.indexPage {
  background: #f3f3f4;
}
</style>