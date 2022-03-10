<template>
  <div class="logo">
    <router-link :to="{ path: defaultRootRoutePath }">
      <!-- <Logo1 alt="logo" width="20" height="20" />
      <Logo2 alt="logo" width="20" height="20" /> -->
      <img src="@/assets/logo2.png" alt="" />

      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
import { defaultRootRoutePath } from '@/router/router.config'
export default {
  name: 'Logo',
  components: {},
  data() {
    return {
      defaultRootRoutePath,
    }
  },
  props: {
    title: {
      type: String,
      default: 'Xhotel智慧酒店',
      required: false,
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
}
</script>
