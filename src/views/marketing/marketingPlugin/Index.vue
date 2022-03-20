<template>
  <section id="poster">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="RedPackTool"> 红包工具 </a-menu-item>
            <a-menu-item key=""> 快速拉群 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import RedPackTool from './redPackTool.vue'
export default {
  name: 'Index',
  components: { RedPackTool },
  data() {
    return {
      current: ['RedPackTool'],
      currentTabComponent: 'RedPackTool',
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
