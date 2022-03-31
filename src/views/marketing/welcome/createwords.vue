<template>
  <section class="createWords">
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>新建欢迎语</span>
    </header>
    <div class="content">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="设置欢迎语模板">
          <a-input type="textarea" v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
          <a-space>
            <a-button type="primary" ghost>从本地上传</a-button>
            <a-button type="primary" ghost>从素材中心上传</a-button>
            <a-button type="primary" ghost>从商品和活动选择</a-button>
            <a-button type="primary" ghost>插入客户昵称</a-button>
          </a-space>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 5 }">
          <a-button type="primary">保存</a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script>
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'CreateWords',
  mixins: [mixinComponent],
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    back() {
      this.changeComponent('Welcomewords')
    },
    onChange() {},
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
  },
}
</script>

<style lang="less" scoped>
.createWords {
  background: #fff;
  margin-left: 15px;
  padding: 0 15px;
  height: 100%;
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
  }
}
</style>
