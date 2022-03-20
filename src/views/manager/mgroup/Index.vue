<template>
  <section class="container">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="Group">客户群 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Group from './group.vue'
import CreateGroup from './createGroup.vue'
export default {
  name: 'Index',
  components: { Group, CreateGroup },
  data() {
    return {
      current: ['Group'],
      currentTabComponent: 'Group',
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
