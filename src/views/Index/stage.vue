<template>
  <section class="index-center">
    <section class="left">
      <section class="left-top borderRadius">
        <div class="title">中午好，骆冰</div>
        <div class="subtitle">你企业的客户总人数已达 <span>1,135</span> 人，客户群总人数已达 <span>833</span> 人</div>
        <a-divider />
        <div id="line" ref="chart"></div>
        <!-- <div class="border"></div> -->
        <!-- <Button class="ant-btn ant-btn-primary">Primary Button</Button>
        <Button type="link">Link Button</Button> -->
      </section>
      <section class="left-bottom"></section>
    </section>
    <section class="right borderRadius"></section>
  </section>
</template>

<script>
export default {
  name: 'stage',
  data() {
    return {}
  },
  components: {},
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    init() {},
  },
}
</script>

<style scoped lang="less">
@import url('@/style/index/stage.less');
</style>
