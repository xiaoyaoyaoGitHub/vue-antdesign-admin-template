<template>
  <section class="TableList">
    <!-- <keep-alive> -->
    <component v-bind:is="currentTabComponent" :changeComponent="changeComponent">
      <template v-slot:header>
        <div>
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="staff"> <a-icon type="mail" />员工活码 </a-menu-item>
            <a-menu-item key="customer"> <a-icon type="appstore" />客户群码 </a-menu-item>
            <a-menu-item key="region"> <a-icon type="appstore" />区域群活码 </a-menu-item>
          </a-menu>
        </div>
      </template>
    </component>
    <!-- </keep-alive> -->
  </section>
</template>

<script>
import StaffCode from './staff.vue'
import CreateEmployee from './createEmployee.vue'
export default {
  name: 'liveQRcode',
  components: { StaffCode, CreateEmployee },
  data() {
    return {
      current: ['staff'],
      currentTabComponent: 'StaffCode',
    }
  },
  watch: {},
  mounted() {},
  methods: {
    changeComponent(componentName) {
      this.currentTabComponent = componentName
    },
  },
}
</script>

<style lang="less">
.TableList {
  height: 100%;
  margin-left: 15px;
  background: #fff;
  padding: 0 15px;
  overflow: auto;
  .button-view {
    margin-bottom: 30px;
    button {
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
