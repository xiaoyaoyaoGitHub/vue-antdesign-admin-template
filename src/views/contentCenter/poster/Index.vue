<template>
  <section id="poster">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="material">海报素材 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Poster from './poster.vue'
import CreatePoster from './createPoster.vue'
export default {
  name: 'Index',
  components: { Poster, CreatePoster },
  data() {
    return {
      current: ['material'],
      currentTabComponent: 'Poster',
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
@import url('@/style/cententCenter/poster/index.less');
</style>
