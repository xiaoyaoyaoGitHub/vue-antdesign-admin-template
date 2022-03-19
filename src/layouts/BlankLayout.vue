<template>
  <transition name="fade-transform" mode="out-in">
    <router-view :key="$route.path" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition>
</template>

<script>
export default {
  name: 'BlankLayout',
  props: {},
}
</script>

<style scoped></style>
