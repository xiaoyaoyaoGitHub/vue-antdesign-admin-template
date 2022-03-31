<template>
  <section id="material">
    <!-- 标题 -->
    <component :is="currentTabComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="Mtext">文本 </a-menu-item>
            <a-menu-item key="MPicture">图片 </a-menu-item>
            <a-menu-item key="MiniProgram">小程序 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Mtext from './mtext.vue'
import MPicture from './mPicture.vue'
import MiniProgram from './miniprogram.vue'
export default {
  name: 'Index',
  components: { Mtext, MPicture, MiniProgram },
  data() {
    return {
      current: ['Mtext'],
      currentTabComponent: 'Mtext',
    }
  },
  watch: {
    current(newVal) {
      this.currentTabComponent = newVal[0]
    },
  },
  created() {},
  methods: {},
}
</script>

<style lang="less" scoped>
@import url('@/style/cententCenter/material/index.less');
</style>
