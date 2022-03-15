<template>
  <section>
    <header>
      <a-button @click="back" type="link"><a-icon type="left" />返回</a-button>
      新建海报素材
    </header>
  </section>
</template>

<script>
export default {
  name: 'CreatePoster',
  props: {
    changeComponent: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    back() {
      this.changeComponent('Poster')
    },
  },
}
</script>
<style lang="less" scoped>
@import url(@/style/cententCenter/poster/createPoster.less);
</style>
