<template>
  <section class="container">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="Manual">手动标签 </a-menu-item>
            <a-menu-item key="Auto">自动标签 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Manual from './manual.vue'
import Auto from './auto.vue'
import CreateAuto from './createAuto.vue'
import CreateTagRules from './createTagRules.vue'
export default {
  name: 'Index',
  components: { Manual, Auto, CreateAuto, CreateTagRules },
  data() {
    return {
      current: ['Manual'],
      currentTabComponent: 'Manual',
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
.container {
  height: 100%;
  background: #fff;
  margin-left: 15px;
  padding: 0 15px;
}
</style>
