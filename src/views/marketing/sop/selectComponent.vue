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
        <a-button :loading="loading" @click="showModel('text')" type="primary" ghost>从素材库上传</a-button>
      </a-space>
    </template>
    <template v-if="typeValue === '1'">
      <a-upload
        :showUploadList="{ showPreviewIcon: false }"
        :customRequest="customImageRequest"
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
        <a-button type="primary" :loading="loading" @click="showModel('image')" ghost>从素材库上传</a-button>
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
            :customRequest="customGraphicsRequest"
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
        <a-space>
          <a-button type="primary" :loading="loading" @click="showModel('image')" ghost>从素材库上传</a-button>
        </a-space>
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
          <a-input v-decorator="['path']" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }" label="小程序封面">
          <a-upload
            list-type="picture-card"
            :file-list="miniImg"
            :showUploadList="{ showPreviewIcon: false }"
            :customRequest="customMiniRequest"
            @change="handleChangeMiniImg"
          >
            <div v-if="miniImg.length < 1">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>
        <a-space>
          <a-button type="primary" :loading="loading" @click="showModel()" ghost>从素材库上传</a-button>
        </a-space>
      </a-form>
    </template>
    <a-modal width="50%" title="选择素材" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="meterials">
        <a-list-item
          @click="selectedText(item)"
          style="cursor: pointer"
          v-if="item.materialType === 'text' && typeValue === '0'"
          :class="{ selectItem: selectText.id === item.id }"
          slot="renderItem"
          slot-scope="item"
        >
          <a-card :title="item.info.title"> {{ item.info.content }} </a-card>
        </a-list-item>
        <a-list-item
          :class="{ selectImgItem: selectImg.id === item.id }"
          @click="selectImage(item)"
          style="cursor: pointer"
          v-else-if="item.materialType === 'image' && typeValue === '1'"
          slot="renderItem"
          slot-scope="item"
        >
          <img :src="item.filePath" mode="widthFix" />
        </a-list-item>
        <a-list-item
          @click="selectedMini(item)"
          style="cursor: pointer"
          v-else-if="item.materialType === 'miniapp' && typeValue === '3'"
          :class="{ selectItem: selectMini.id === item.id }"
          slot="renderItem"
          slot-scope="item"
        >
          <a-card :title="item.info.title">
            <p>小程序appid:{{ item.info.appid }}</p>
            <p>小程序路径:{{ item.info.path }}</p>
            <p>标题:{{ item.info.title }}</p>
            <img width="100%" :src="item.filePath" alt="" />
          </a-card>
        </a-list-item>
      </a-list>
    </a-modal>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
import { QUERY_MATERIAL_LIST } from '@/store/modules/material/type'
import { mapActions, mapState } from 'vuex'
import { addImage } from '@/api/manage'
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
      types: [
        { label: '文字', value: '0' },
        { label: '图片', value: '1' },
        { label: '微信图文', value: '2' },
        { label: '小程序', value: '3' },
      ],
      visible: false,
      loading: false,
      selectText: {},
      selectImg: {},
      selectMini: {},
    }
  },
  props: {
    idx: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      meterials: (state) => {
        const current = state.material.meterials.concat() || []
        current.map((item) => {
          item.info = JSON.parse(item.content)
        })
        return current
      },
      hotelCode: (state) => state.user.hotelCode,
    }),
  },
  emits: ['remove'],
  methods: {
    ...mapActions([QUERY_MATERIAL_LIST]),
    handleOk() {
      if (this.typeValue === '0') {
        this.textContent = this.selectText.info.content
      } else if (this.typeValue === '1') {
        const url = this.selectImg.filePath
        this.fileList = [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url,
            media_id: this.selectImg.mediaId,
          },
        ]
      } else if (this.typeValue === '3') {
        console.log(this.selectMini)
        const { info = {}, filePath, mediaId } = this.selectMini || {}
        const { title, appid, path } = info
        this.miniForm.setFieldsValue({
          title,
          appid,
          path,
        })
        this.miniImg = [
          {
            url: filePath,
            uid: '-1',
            name: 'image.png',
            status: 'done',
            pic_media_id: mediaId,
          },
        ]
      }
      this.handleVisible()
    },
    handleCancel() {
      this.handleVisible()
    },
    handleVisible() {
      this.visible = !this.visible
    },
    selectedText(item) {
      this.selectText = item
    },
    selectImage(item) {
      this.selectImg = item
    },
    selectedMini(item) {
      this.selectMini = item
    },
    async showModel(type) {
      this.loading = true
      const { code } = await this.QUERY_MATERIAL_LIST({ materialType: type, group: '1' })
      if (code === 200) {
        this.loading = false
        this.handleVisible()
      }
    },
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
    async customImageRequest({ file }) {
      getBase64(file, async (img) => {
        const { code, data: url } = await addImage({ file: img.split(',')[1], hotelCode: this.hotelCode })
        if (code === 200) {
          this.fileList = [
            {
              url,
              uid: '-1',
              name: 'image.png',
              status: 'done',
            },
          ]
        }
      })
    },
    async customGraphicsRequest({ file }) {
      getBase64(file, async (img) => {
        const { code, data: url } = await addImage({ file: img.split(',')[1], hotelCode: this.hotelCode })
        if (code === 200) {
          this.graphicsImg = [
            {
              url,
              uid: '-1',
              name: 'image.png',
              status: 'done',
            },
          ]
        }
      })
    },
    async customMiniRequest({ file }) {
      getBase64(file, async (img) => {
        const { code, data: url } = await addImage({ file: img.split(',')[1], hotelCode: this.hotelCode })
        if (code === 200) {
          this.miniImg = [
            {
              url,
              uid: '-1',
              name: 'image.png',
              status: 'done',
            },
          ]
        }
      })
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
          image: { media_id: fileList[0].mediaId, pic_url: fileList[0].url },
        }
      }
      if (typeValue === '2') {
        // 图文
        this.graphics.validateFields((err, value) => {
          result = {
            msgtype: 'link',
            link: {
              picurl: graphicsImg[0].url,
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
              picurl: miniImg[0].url,
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
.selectItem {
  .ant-list-item {
    .ant-card-bordered {
      border-color: @primary-color;
    }
  }
}
.selectImgItem {
  border: 1px solid @primary-color;
}
img {
  width: 100%;
  display: block;
}
</style>
