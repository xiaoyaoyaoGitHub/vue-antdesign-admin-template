<template>
  <section id="poster">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="Moment"> 历史朋友圈 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Moment from './moment.vue'
import CreateMoment from './createMoment.vue'
export default {
  name: 'Index',
  components: { Moment, CreateMoment },
  data() {
    return {
      current: ['Moment'],
      currentTabComponent: 'Moment',
    }
  },
  watch: {
    current(newVal) {
      this.currentTabComponent = newVal[0]
    },
  },
  created() {
    console.log('created')
  },
  methods: {
    changeComponent(name) {
      this.currentTabComponent = name
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/cententCenter/poster/index.less');
</style>
