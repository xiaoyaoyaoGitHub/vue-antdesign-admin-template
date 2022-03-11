<template>
  <a-layout class="index-layout-content">
    <!-- 页面左侧列表 -->
    <side-menu mode="inline" :menus="menus" theme="light" :collapsible="true"> </side-menu>
    <!-- layout content -->
    <a-layout-content>
      <route-layout />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex'
import { openPermission } from '@/config/index'
import RouteLayout from '@/layouts/RouteLayout.vue'
import SideMenu from '@/components/Menu/SideMenu'

export default {
  name: 'Index',
  components: {
    RouteLayout,
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
