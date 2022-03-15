<template>
  <router-view :key="$route.path" v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
export default {
  name: 'BlankLayout',
  props: {},
}
</script>

<style scoped></style>
