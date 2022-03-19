<template>
  <section id="poster">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="AutoGroup">新客自动拉群 </a-menu-item>
            <a-menu-item key="GroupByTag">老客标签建群 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import AutoGroup from './autoGroup.vue'
import GroupByTag from './groupByTag.vue'
import CreateGroupByTag from './createGroupByTag.vue'
export default {
  name: 'Index',
  components: { AutoGroup, GroupByTag, CreateGroupByTag },
  data() {
    return {
      current: ['AutoGroup'],
      currentTabComponent: 'AutoGroup',
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
