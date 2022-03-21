<template>
  <section class="container">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="ToBeTranfr">待转化线索 </a-menu-item>
            <a-menu-item key="Tranformed">已转化线索 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import ToBeTranfr from './toBeTranfr.vue'
import Tranformed from './Tranformed.vue'
export default {
  name: 'Index',
  components: { ToBeTranfr, Tranformed },
  data() {
    return {
      current: ['ToBeTranfr'],
      currentTabComponent: 'ToBeTranfr',
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
