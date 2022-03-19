<template>
  <section class="create-moment">
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>标签建群统计</span>
    </header>
    <a-form-model class="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }" :mode="form" :rules="rules">
      <a-form-model-item label="选择员工" prop="staffs">
        <a-button type="link">编辑</a-button><span>已经选择以下部门和人员</span>
        <div class="staffLists">
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
          <span><a-icon type="user" />王留下</span>
        </div>
      </a-form-model-item>
      <a-form-model-item label="朋友圈内容">
        <a-button type="link">从素材中心选取</a-button>
        <div class="add-material">
          <div class="content"></div>
          <!-- <a-divider /> -->
          <!-- <img src="" alt="" /> -->
        </div>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ offset: 4 }">
        <a-button type="primary">提交</a-button>
      </a-form-model-item>
    </a-form-model>
  </section>
</template>

<script>
export default {
  name: 'Moment',
  data() {
    return {
      form: {
        staffs: '',
      },
      rules: {
        staffs: [
          {
            required: true,
          },
        ],
      },
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
      this.changeComponent('Moment')
    },
  },
}
</script>
<style lang="less" scoped>
@import url('@/style/marketing/wechat/createMoment');
</style>
