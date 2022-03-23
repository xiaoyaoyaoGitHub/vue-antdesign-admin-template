<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <a-button type="primary">新建红包裂变</a-button>
      <p class="btn-desc">新建红包裂变后,请根据提示联系运营人员充值红包开启活动;活动开启后,引导客户加好友领红包,快速实现拉新裂变</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RedEnvelop',
}
</script>
<style lang="less" scoped>
.content {
  padding: 24px 0;
}
</style>
