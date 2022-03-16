<template>
  <a-layout key="marketing" class="index-layout-content">
    <!-- 页面左侧列表 -->
    <side-menu data-id="marketing" key="marketing" mode="inline" :menus="menus" theme="light" :collapsible="true"> </side-menu>
    <!-- layout content -->
    <a-layout-content>
      <div style="background: #fff; height: 100%; margin-left: 15px">
        <a-result status="403" title="敬请期待">
          <!-- <template #extra>
        <a-button type="primary"> Back Home </a-button>
      </template> -->
        </a-result>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import { openPermission } from '@/config/index'
import RouteLayout from '@/layouts/RouteLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import SideMenu from '@/components/Menu/SideMenu'

export default {
  name: 'Index',
  components: {
    SideMenu,
  },
  data() {
    return {
      menu: [],
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: (state) => state.permission.addRouters,
    }),
  },
  watch: {},
  created() {
    const menus = openPermission ? this.mainMenu : syncRouterMap
    const children = menus.find((item) => item.path === '/').children
    const path = this.$route.path
    this.menus = children.find((item) => path.indexOf(item.path) > -1 || path.indexOf(item.redirect) > -1)?.children || []
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.index-layout-content {
  height: 100%;
}
</style>
