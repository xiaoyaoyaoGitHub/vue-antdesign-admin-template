<template>
  <div class="content">
    <a-row type="flex" justify="space-between">
      <a-col>
        <a-radio-group :options="types" v-model="typeValue" @change="onChange" />
      </a-col>
      <a-col>
        <a-button type="link">删除</a-button>
      </a-col>
    </a-row>
    <template v-if="typeValue === '0'">
      <a-input type="textarea" />
      <a-space>
        <a-button type="primary" ghost>从素材库上传</a-button>
      </a-space>
    </template>
    <template v-if="typeValue === '1'">
      <a-upload list-type="picture-card" :multiple="true" :file-list="fileList" @preview="handlePreview" @change="handleChange">
        <div v-if="fileList.length < 10">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-space>
        <a-button type="primary" ghost>从素材库上传</a-button>
      </a-space>
    </template>
    <template v-if="typeValue === '2'">
      <a-form-item :wrapper-col="{ span: 18 }" :label-col="{ span: 6 }" label="微信图文标题">
        <a-input />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18 }" :label-col="{ span: 6 }" label="微信图文描述">
        <a-input />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18 }" :label-col="{ span: 6 }" label="微信图文地址">
        <a-input />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18 }" :label-col="{ span: 6 }" label="微信图文封面图片">
        <a-upload name="avatar" list-type="picture-card" class="avatar-uploader" :show-upload-list="false" @change="handleChangeOne">
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
    </template>
    <template v-if="typeValue === '3'">
      <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 6 }" label="小程序标题">
        <a-input />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 6 }" label="小程序封面">
        <a-upload name="avatar" list-type="picture-card" class="avatar-uploader" :show-upload-list="false" @change="handleChangeMini">
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon :type="loadingMini ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
    </template>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  name: 'SelectComponent',
  data() {
    return {
      typeValue: '0',
      previewVisible: false,
      previewImage: '',
      fileList: [],
      imageUrl: '',
      loading: false,
      loadingMini: false,
      types: [
        { label: '文字', value: '0' },
        { label: '图片', value: '1' },
        { label: '微信图文', value: '2' },
        { label: '小程序', value: '3' },
      ],
    }
  },
  props: {},
  methods: {
    onChange(e) {
      console.log('radio1 checked', e.target.value, this.typeValue)
    },
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      console.log(fileList)
      this.fileList = fileList
    },
    handleChangeOne(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    handleChangeMini(info) {
      if (info.file.status === 'uploading') {
        this.loadingMini = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl
          this.loadingMini = false
        })
      }
    },
    upload() {
      console.log('upload')
    },
  },
}
</script>

<style lang="less" scoped>
.content {
  margin: 15px 0;
  border: 1px solid #eee;
  padding: 15px;
}
</style>
