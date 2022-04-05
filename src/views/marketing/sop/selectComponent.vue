<template>
  <div class="content">
    <a-row type="flex" justify="space-between">
      <a-col>
        <a-radio-group :options="types" v-model="typeValue" @change="onChange" />
      </a-col>
      <a-col>
        <!-- <a-button type="link" @click="removeSelf">删除</a-button> -->
      </a-col>
    </a-row>
    <template v-if="typeValue === '0'">
      <a-input v-model="textContent" type="textarea" />
      <a-space>
        <a-button type="primary" ghost>从素材库上传</a-button>
      </a-space>
    </template>
    <template v-if="typeValue === '1'">
      <a-upload
        :showUploadList="{ showPreviewIcon: false }"
        :beforeUpload="customRequest"
        list-type="picture-card"
        :multiple="false"
        :file-list="fileList"
        @change="handleChange"
      >
        <div v-if="fileList.length < 1">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-space>
        <a-button type="primary" ghost>从素材库上传</a-button>
      </a-space>
    </template>
    <template v-if="typeValue === '2'">
      <a-form :form="graphics" :label-col="{ span: 6 }">
        <a-form-item label="微信图文标题" :wrapper-col="{ span: 10 }">
          <a-input v-decorator="['title']" />
        </a-form-item>
        <a-form-item label="微信图文描述" :wrapper-col="{ span: 10 }">
          <a-input v-decorator="['desc']" />
        </a-form-item>
        <a-form-item label="微信图文地址" :wrapper-col="{ span: 10 }">
          <a-input v-decorator="['path']" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 10 }" label="微信图文封面图片">
          <a-upload
            list-type="picture-card"
            :showUploadList="{ showPreviewIcon: false }"
            :file-list="graphicsImg"
            :beforeUpload="customRequest"
            @change="handleChangeGraphicsImg"
          >
            <div v-if="graphicsImg.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <!-- <a-upload name="avatar" list-type="picture-card" class="avatar-uploader" :show-upload-list="false" @change="handleChangeGraphicsImg">
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload> -->
        </a-form-item>
      </a-form>
    </template>
    <template v-if="typeValue === '3'">
      <a-form :form="miniForm">
        <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }" label="小程序标题">
          <a-input v-decorator="['title']" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }" label="小程序appId">
          <a-input v-decorator="['appid']" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }" label="小程序路径">
          <a-input v-decorator="['page']" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }" label="小程序封面">
          <a-upload
            list-type="picture-card"
            :file-list="miniImg"
            :showUploadList="{ showPreviewIcon: false }"
            :beforeUpload="customRequest"
            @change="handleChangeMiniImg"
          >
            <div v-if="miniImg.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
      </a-form>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  data() {
    return {
      typeValue: '0', // 类型切换
      fileList: [],
      textContent: '', // 文本内容
      graphics: this.$form.createForm(this, { name: 'graphics' }),
      miniForm: this.$form.createForm(this, { name: 'miniForm' }),
      graphicsImg: [],
      miniImg: [],
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
  props: {
    idx: {
      type: Number,
    },
  },
  emits: ['remove'],
  methods: {
    onChange(e) {
      console.log('radio1 checked', e.target.value, this.typeValue)
    },
    removeSelf() {
      // console.log(this.idx)
      console.log(this._uid)
      this.$emit('remove', this._uid)
    },
    customRequest() {
      return false
    },
    handleChange({ fileList }) {
      console.log(fileList)
      this.fileList = fileList
    },
    handleChangeGraphicsImg({ fileList }) {
      this.graphicsImg = fileList
    },
    handleChangeMiniImg({ fileList }) {
      this.miniImg = fileList
    },
    upload() {
      console.log('upload')
    },
    getInfo() {
      // 微信图文
      let result = undefined
      const { typeValue, miniImg, graphicsImg, fileList, textContent } = this || {}
      if (typeValue === '0') {
        // 文本
        result = {
          msgtype: 'text',
          content: textContent,
        }
      }
      if (typeValue === '1') {
        // 图片
        result = {
          msgtype: 'image',
          image: { media_id: 'MEDIA_ID', pic_url: 'http://p.qpic.cn/pic_wework/3474110808/7a6344sdadfwehe42060/0' },
        }
      }
      if (typeValue === '2') {
        // 图文
        this.graphics.validateFields((err, value) => {
          result = {
            msgtype: 'link',
            link: {
              picurl: '',
              ...value,
            },
          }
        })
      }
      if (typeValue === '3') {
        // 小程序
        this.miniForm.validateFields((err, value) => {
          console.log(err, value)
          result = {
            msgtype: 'miniprogram',
            miniprogram: {
              picurl: '',
              ...value,
            },
          }
        })
      }

      return result
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
