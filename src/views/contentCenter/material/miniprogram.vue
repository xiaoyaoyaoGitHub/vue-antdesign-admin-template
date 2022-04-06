<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <!-- 新建按钮 -->
      <a-button type="primary" @click="createMiniVisibleControl">添加小程序</a-button>
      <p class="desc">
        <a-icon style="fontsize: 14px; color: #00b3a8" type="info-circle" />
        添加小程序素材后,可用于企业群发功能
      </p>
      <a-divider />
      <!-- 分类 -->
      <div class="classifies">
        <div class="label">分类:</div>
        <div class="class-content">
          <a-button type="primary" ghost @click="typeModalControl"><a-icon type="plus" />添加分类</a-button>
          <a-button type="primary" ghost>全部</a-button>
          <a-popover overlayClassName="operation" trigger="click">
            <template slot="content">
              <p class="pointer">删除</p>
              <p class="pointer">编辑</p>
            </template>
            <a-button type="default">企微管家介绍<a-icon style="fontsize: 12px" type="more" /></a-button>
          </a-popover>
          <a-popover overlayClassName="operation" trigger="click">
            <template slot="content">
              <p class="pointer">删除</p>
              <p class="pointer">编辑</p>
            </template>
            <a-button type="default">产品介绍<a-icon type="more" /></a-button>
          </a-popover>
          <a-popover overlayClassName="operation" trigger="click">
            <template slot="content">
              <p class="pointer">删除</p>
              <p class="pointer">编辑</p>
            </template>
            <a-button type="default">转化话术<a-icon type="more" /></a-button>
          </a-popover>
        </div>
      </div>
      <!-- 查询 -->
      <a-form class="form" layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item label="小程序名称">
          <a-input v-decorator="['userName']" placeholder="文本标题/内容"> </a-input>
        </a-form-item>
        <!-- <a-form-item label="创建人">
          <a-select default-value="1" placeholder="所有人" style="width: 120px">
            <a-select-option value="1"> 所有人</a-select-option>
            <a-select-option value="2"> A 2 </a-select-option>
            <a-select-option value="3"> A 3 </a-select-option>
          </a-select>
        </a-form-item> -->
        <a-form-item>
          <a-button type="primary">查询</a-button>
          <a-button type="default">删除</a-button>
        </a-form-item>
      </a-form>
      <!-- 小程序展示 -->
      <div class="miniprogram-list">
        <a-button>移除分组</a-button>
        <a-button>删除</a-button>
        <div class="lists">
          <!-- <div class="item selected">
            <div class="select">
              <a-icon class="checkIcon" type="check" />
              小程序名称
            </div>
          </div> -->
          <div
            @click="select(item.id)"
            class="item"
            :class="selectIndex.includes(item.id) ? 'selected' : ''"
            v-for="(item, index) in meterialMiniAppLists"
            :key="index"
          >
            <div class="select">
              <a-icon class="checkIcon" type="check" />
              {{ item.appid }}
              <div>标题:{{ item.title }}</div>
              <div>路经:{{ item.path }}</div>
            </div>
          </div>
          <!-- <div class="item">
            <div class="select">
              <a-icon class="checkIcon" type="check" />
              {{ item.content }}
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 添加分类 -->
    <a-modal title="添加分类" :visible="typeModalVisible" @ok="addTypeModalConfirm" @cancel="typeModalControl">
      <a-form :form="formClassiesType" :labelCol="{ span: 4, offset: 0 }" :wrapperCol="{ span: 12, offset: 2 }">
        <a-form-item label="分类名称" has-feedback>
          <a-input v-decorator="['typeName', { rules: [{ required: true, message: '请输入分类名称' }] }]"> </a-input>
        </a-form-item>
        <a-form-item label="分类级别">
          <a-radio-group v-decorator="['radio-group', { rules: [{ required: true }] }]">
            <a-radio value="a"> 一级分类 </a-radio>
            <a-radio value="b"> 二级分类 </a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 新建文本 -->
    <a-modal title="添加小程序" :visible="createMiniVisible" width="50%" @ok="createMiniVisibleConfirm" @cancel="createMiniVisibleControl">
      <a-form-model ref="createMiniappForm" :rules="rules" :model="createMiniappForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="小程序标题" prop="title" ref="title">
          <a-input
            v-model="createMiniappForm.title"
            @blur="
              () => {
                $refs.title.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="小程序AppId" prop="appid" ref="appid">
          <a-input
            v-model="createMiniappForm.appid"
            @blur="
              () => {
                $refs.appid.onFieldBlur()
              }
            "
          />
          <div class="help" slot="help">如何查看AppId</div>
        </a-form-model-item>
        <a-form-model-item label="小程序App路径" prop="path" ref="path">
          <a-input
            v-model="createMiniappForm.path"
            @blur="
              () => {
                $refs.path.onFieldBlur()
              }
            "
          />
          <div class="help" slot="help">如何查看AppId</div>
        </a-form-model-item>
        <a-form-model-item label="小程序分类" ref="type" prop="type">
          <a-select v-model="createMiniappForm.type" placeholder="请选择">
            <a-select-option value="miniapp"> 小程序 </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="小程序封面">
          <a-upload
            list-type="picture-card"
            :showUploadList="{ showPreviewIcon: false }"
            :beforeUpload="beforeUpload"
            :file-list="fileList"
            @change="handlePicChange"
          >
            <div v-if="fileList.length === 0">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <div class="help" slot="help">建议尺寸500*400</div>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </section>
</template>

<script>
import { METERIAL_UPLOAD, QUERY_MATERIAL_LIST } from '@/store/modules/material/type'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'MiniProgram',
  components: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      formClassiesType: this.$form.createForm(this, { name: 'addClassType' }),
      editingKey: '',
      typeModalVisible: false, // 分类模态框
      createMiniVisible: false, //新建文本模态框
      createMiniappForm: {
        title: '',
        appid: '',
        path: '',
        type: 'miniapp',
      },
      fileList: [],
      rules: {
        title: [{ required: true, message: '请输入小程序标题', trigger: 'blur' }],
        appid: [],
        path: [],
        type: [],
      },
      selectIndex: [],
    }
  },
  computed: {
    ...mapState({
      meterialMiniAppLists: (state) => {
        const lists = state.material.meterialMiniAppLists
        lists.map((item) => {
          const content = JSON.parse(item.content)
          item.title = content.title
          item.appid = content.appid
          item.path = content.path
        })
        console.log(lists)
        return lists
      },
    }),
  },
  created() {
    this.queryMiniList()
  },
  methods: {
    ...mapActions([METERIAL_UPLOAD, QUERY_MATERIAL_LIST]),
    beforeUpload() {
      return false
    },
    select(idx) {
      console.log(this.selectIndex.includes(idx))
      if (this.selectIndex.includes(idx)) {
        const currentIndex = this.selectIndex.findIndex((item) => item === idx)
        console.log(currentIndex)
        const currentList = this.selectIndex.concat()
        currentList.splice(currentIndex, 1)
        this.selectIndex = currentList
      } else {
        this.selectIndex.push(idx)
      }
    },
    /**
     * 图片的上传和删除
     */
    handlePicChange({ fileList }) {
      console.log(fileList)
      this.fileList = fileList
    },
    /**
     * 确定添加小程序
     */
    createMiniVisibleConfirm() {
      this.$refs.createMiniappForm.validate(async (valid) => {
        console.log(this.fileList)
        const fileData = new FormData()
        fileData.append('file', this.fileList[0].originFileObj)
        fileData.append('materialType', 'miniapp')
        fileData.append('type', 'miniapp')
        fileData.append('group', '1')
        fileData.append('content', this.createMiniappForm)
        const { code, data } = await this.METERIAL_UPLOAD(fileData)
        if (code === 200) {
          this.$message.success('添加成功', () => {
            // 新增成功
            this.createMiniVisibleControl()
            this.queryMiniList()
          })
        }
      })
      // this.createMiniVisibleControl()
    },
    /**
     *
     */
    async queryMiniList() {
      const { code, data } = await this.QUERY_MATERIAL_LIST({ materialType: 'miniapp', group: '1' })
      console.log(code, data)
    },
    /**
     * 添加图片按钮
     */
    createMiniVisibleControl() {
      this.createMiniVisible = !this.createMiniVisible
    },
    /**
     * 添加分类模态框弹出与关闭
     */
    typeModalControl() {
      this.typeModalVisible = !this.typeModalVisible
    },
    addTypeModalConfirm() {
      // if()
      // this.typeModalControl()
    },
    handleSubmit() {},
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.filter((item) => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit(key) {
      const newData = [...this.data]
      const target = newData.filter((item) => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save(key) {
      const newData = [...this.data]
      const newCacheData = [...this.cacheData]
      const target = newData.filter((item) => key === item.key)[0]
      const targetCache = newCacheData.filter((item) => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.data = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    cancel(key) {
      const newData = [...this.data]
      const target = newData.filter((item) => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter((item) => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
    remove() {
      console.log('删除')
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/cententCenter/material/miniprogram.less');
</style>
