<template>
  <section>
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>新建员工活码</span>
    </header>
    <a-form class="form" :form="form">
      <a-form-item label="活码名称" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-input v-decorator="['username', { rules: [{ required: true, message: '请输入活码名称' }] }]" placeholder="请输入活码名称" />
      </a-form-item>
      <a-form-item label="类型" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-radio-group v-decorator="['radio-type']">
          <a-radio value="a"> 单人 </a-radio>
          <a-radio value="b"> 多人 </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="使用员工" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a v-decorator="['staff', { rules: [{ required: true, message: '请选择员工' }] }]" href="javascript:;">添加</a>
      </a-form-item>
      <a-form-item label="添加设置" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-radio-group v-decorator="['radio-setup']">
          <a-radio value="a"> 自动通过 </a-radio>
          <a-radio value="b"> 手动通过 </a-radio>
          <a-radio value="b"> 分时段通过 </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        extra="客户扫码添加员工后，自动打上对应标签"
        class="custom-label"
        label="客户标签"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-button type="primary" ghost><a-icon type="plus" />添加标签</a-button>
      </a-form-item>
      <a-form-item label="欢迎语" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-radio-group v-decorator="['radio-welcomewrods']">
          <a-radio value="a"> 固定欢迎语 </a-radio>
          <a-radio value="b"> 分时段欢迎语 </a-radio>
        </a-radio-group>
        <div class="welcome-textarea">
          <a-textarea :rows="4" placeholder="设置个性化欢迎语，扫描该员工活码添加的客户，将自动推送该欢迎语" allow-clear> </a-textarea>
          <a-button><a-icon type="plus" />从本地上传</a-button>
          <a-button><a-icon type="plus" />从素材中心双穿</a-button>
          <a-button><a-icon type="plus" />从商品和活动选择</a-button>
        </div>
      </a-form-item>
    </a-form>
    <div class="u-text-center btns">
      <a-button type="primary"> 确定 </a-button>
      <a-button @click="back"> 取消 </a-button>
    </div>
  </section>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}
export default {
  name: 'CreateEmployee',
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    }
  },
  props: {
    changeComponent: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    back() {
      this.changeComponent('StaffCode')
    },
  },
}
</script>
<style lang="less" scoped>
header {
  .sc (18px, @primary-color);
  text-align: center;
  padding: 12px 0;
  margin: 0 -15px;
  border-bottom: 1px solid #eee;
  .back {
    float: left;
    margin-left: 15px;
  }
}
.form {
  margin-top: 15px;
}
.custom-label {
  .add-custom-label {
    border: 1px solid @primary-color;
    .sc(16px, @primary-color);
    padding: 6px 12px;
  }
}

.welcome-textarea {
  text-area {
    background-color: #fafafa;
  }
  button {
    margin-right: 5px;
  }
}
.btns {
  button {
    margin-right: 15px;
  }
}
</style>
