<template>
  <section>
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>新建群发客户</span>
    </header>
    <div class="content">
      <a-row type="flex" justify="start">
        <a-col :span="6">
          <a-card class="card-item" title="自定义创建" :bordered="false">
            <p>按需自定义打标签规则</p>
          </a-card>
        </a-col>
      </a-row>
      <a-divider> 使用模板创建 </a-divider>
      <div class="lists">
        <a-row type="flex" justify="start" :gutter="40">
          <a-col :span="6">
            <a-card class="card-item" title="素材浏览频次" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card class="card-item" title="素材偏好" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card class="card-item" title="跟进优先级" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card class="card-item" title="素材浏览频次" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card class="card-item" title="素材偏好" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card class="card-item" title="跟进优先级" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </section>
</template>

<script>
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'CreateAuto',
  mixins: [mixinComponent],
  methods: {
    back() {
      this.changeComponent('Auto')
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
