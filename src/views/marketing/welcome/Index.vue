<template>
  <section id="welcomewords">
    <!-- 标题 -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="Welcomewords"> 欢迎语 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
  </section>
</template>

<script>
import Welcomewords from './welcomewords.vue'
import CreateWords from './createwords.vue'
export default {
  name: 'Index',
  components: { Welcomewords, CreateWords },
  data() {
    return {
      current: ['Welcomewords'],
      currentTabComponent: 'Welcomewords',
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
#welcomewords {
  height: 100%;
}
</style>
