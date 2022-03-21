<template>
  <section>
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>新建自动标签组规则</span>
    </header>
    <div class="content"></div>
  </section>
</template>

<script>
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'CreateTagRules',
  mixins: [mixinComponent],
  methods: {
    back() {
      this.changeComponent('CreateAuto')
    },
  },
}
</script>
<style lang="less" scoped>
header {
  padding: 5px 0;
  margin: 0 -15px;
  border-bottom: 1px solid #eee;
  text-align: center;
  position: relative;
  line-height: 32px;
  .sc (14px, #000);
  button {
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.content {
  padding: 15px 0;
  .lists {
  }
  .card-item {
    text-align: center;
    background: #efefef;
    margin-bottom: 30px;
  }
}
</style>
