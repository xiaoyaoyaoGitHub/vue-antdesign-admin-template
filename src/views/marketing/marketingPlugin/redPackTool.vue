<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <p>可用于企业直接发送红包,用于产品的返利,福利,做活动,社群运营等场景</p>
      <a-divider />
      <a-form-model :mode="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="配置聊天工具栏">
          <a-button type="link">如何添加聊天工具栏?</a-button>
        </a-form-model-item>
        <a-form-model-item label="红包工具">
          <span>www.baidu.com</span>
          <a-button type="link">点击辅助地址</a-button>
        </a-form-model-item>
        <a-divider> 红包工具栏 </a-divider>
        <a-form-model-item label="图片">
          <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture-card" :file-list="fileList" @change="handleChange">
            <div v-if="fileList.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <p>上传企业logo,建议110*110</p>
        </a-form-model-item>
        <a-form-model-item label="发红包权限人">
          <a-button type="link">修改</a-button>
          <div class="juris">
            <span><a-icon type="user" />阿西</span>
            <span><a-icon type="user" />阿西</span>
            <span><a-icon type="user" />阿西</span>
            <span><a-icon type="user" />阿西</span>
            <span><a-icon type="user" />阿西</span>
            <span><a-icon type="user" />阿西</span>
          </div>
        </a-form-model-item>
        <a-form-model-item label="企业名称" :wrapper-col="{ span: 5 }">
          <a-input placeholder="" />
        </a-form-model-item>
        <a-form-model-item label="红包素材">
          <a-button type="link">选择素材</a-button>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ offset: 4 }">
          <a-button type="primary">保存</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RedPackTool',
  data() {
    return {
      form: {},
      fileList: [],
    }
  },
  methods: {
    handleChange({ fileList }) {
      this.fileList = fileList
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/marketing/marketingPlugin/redPackTool');
</style>
