<template>
  <section id="material">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="text">文本 </a-menu-item>
            <a-menu-item key="picture">图片 </a-menu-item>
            <a-menu-item key="miniprogram">小程序 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Mtext from './mtext.vue'
export default {
  name: 'Index',
  components: { Mtext },
  data() {
    return {
      current: ['text'],
      currentTabComponent: 'Mtext',
    }
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
@import url('@/style/cententCenter/material/index.less');
</style>
