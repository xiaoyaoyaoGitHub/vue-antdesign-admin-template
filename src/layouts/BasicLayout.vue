<template>
  <a-layout :class="['layout', device]">
    <global-header :mode="layoutMode" :menus="menus" :collapsed="collapsed" :device="device" @toggle="toggle" />
    <route-layout class="layoutContent" :class="[layoutMode, `content-width-fixed`]"></route-layout>
  </a-layout>
</template>

<script>
import { triggerWindowResizeEvent } from '@/utils/util'
import { mapState, mapActions } from 'vuex'
import { mixin, mixinDevice } from '@/utils/mixin'
import RouteLayout from './RouteLayout'
import GlobalHeader from '@/components/GlobalHeader'
// import GlobalFooter from '@/components/GlobalFooter'
import SettingDrawer from '@/components/SettingDrawer'
import { openPermission, prodShowSettingDrawer } from '@/config/index'
import { syncRouterMap } from '@/router/router.config'
export default {
  name: 'BasicLayout',
  mixins: [mixin, mixinDevice],
  components: {
    RouteLayout,
    GlobalHeader,
  },
  data() {
    return {
      showDrawer: prodShowSettingDrawer || process.env.NODE_ENV !== 'production',
      collapsed: false,
      menus: [],
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: (state) => state.permission.addRouters,
    }),
    contentPaddingLeft() {
      if (!this.fixSiderbar || this.isMobile()) {
        return '0'
      }
      if (this.sidebarOpened) {
        return '256px'
      }
      return '80px'
    },
  },
  watch: {
    sidebarOpened(val) {
      this.collapsed = !val
    },
  },
  created() {
    const menus = openPermission ? this.mainMenu : syncRouterMap
    this.menus = menus.find((item) => item.path === '/').children
    this.collapsed = !this.sidebarOpened
  },
  mounted() {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }
  },
  methods: {
    ...mapActions(['setSidebar']),
    toggle() {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
    paddingCalc() {
      let left = ''
      if (this.sidebarOpened) {
        left = this.isDesktop() ? '256px' : '80px'
      } else {
        left = (this.isMobile() && '0') || (this.fixSiderbar && '80px') || '0'
      }
      return left
    },
    menuSelect() {},
    drawerClose() {
      this.collapsed = false
    },
  },
}
</script>

<style lang="less"></style>
