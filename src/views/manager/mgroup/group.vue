<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <a-button @click="createGroup" type="primary">新建群发客户</a-button>
    </div>
  </section>
</template>

<script>
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'Group',
  mixins: [mixinComponent],
  methods: {
    createGroup() {
      this.changeComponent('CreateGroup')
    },
  },
}
</script>
<style lang="less" scoped>
.content {
  margin: 24px 0;
}
</style>
