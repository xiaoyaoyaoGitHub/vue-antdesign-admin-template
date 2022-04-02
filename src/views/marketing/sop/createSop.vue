<template>
  <section class="sop-content">
    <a-form class="form" :form="form" :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }">
      <a-form-item label="请输入sop流程名称">
        <a-input v-decorator="['note', { rules: [{ required: true, message: '请输入sop流程名称' }] }]" />
      </a-form-item>
      <a-form-item label="选择用户群">
        <a-space v-decorator="['type', { rules: [{ required: true, message: '请选择用户群' }] }]">
          <a-button type="default">新用户</a-button>
          <a-button type="default">老用户</a-button>
          <a-button type="default">常用用户</a-button>
        </a-space>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4 }">
        <a-button type="primary">保存</a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<script>
export default {
  name: 'CreateSop',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
}
</script>

<style lang="less" scoped>
.sop-content {
  margin-left: 15px;
  padding-top: 30px;
  background: #fff;
  height: 100%;
  .form {
  }
}
</style>
