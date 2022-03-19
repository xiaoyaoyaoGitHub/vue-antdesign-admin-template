<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <!-- 新建按钮 -->
      <a-button type="primary" @click="createTextVisibleControl">添加小程序</a-button>
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
          <div class="item selected">
            <div class="select">
              <a-icon class="checkIcon" type="check" />
              小程序名称
            </div>
          </div>
          <div class="item">
            <div class="select">
              <a-icon class="checkIcon" type="check" />
              小程序名称
            </div>
          </div>
          <div class="item">
            <div class="select">
              <a-icon class="checkIcon" type="check" />
              小程序名称
            </div>
          </div>
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
    <a-modal title="添加小程序" :visible="createTextVisible" width="50%" @ok="addTextConfirm" @cancel="createTextVisibleControl">
      <a-form-model ref="ruleForm" :rules="rules" :model="createTextForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="小程序标题" prop="title" ref="title">
          <a-input
            v-model="createTextForm.title"
            @blur="
              () => {
                $refs.title.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="小程序AppId" prop="miniId" ref="miniId">
          <a-input
            v-model="createTextForm.miniId"
            @blur="
              () => {
                $refs.miniId.onFieldBlur()
              }
            "
          />
          <div class="help" slot="help">如何查看AppId</div>
        </a-form-model-item>
        <a-form-model-item label="小程序App路径" prop="miniUrl" ref="miniUrl">
          <a-input
            v-model="createTextForm.miniUrl"
            @blur="
              () => {
                $refs.miniUrl.onFieldBlur()
              }
            "
          />
          <div class="help" slot="help">如何查看AppId</div>
        </a-form-model-item>
        <a-form-model-item label="小程序分类" ref="region" prop="region">
          <a-select v-model="createTextForm.region" placeholder="请选择">
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="小程序封面">
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
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
export default {
  name: 'MiniProgram',
  components: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      formClassiesType: this.$form.createForm(this, { name: 'addClassType' }),
      editingKey: '',
      typeModalVisible: false, // 分类模态框
      createTextVisible: false, //新建文本模态框
      createTextForm: {},
      fileList: [],
      rules: {
        title: [{ required: true, message: '请输入小程序标题', trigger: 'blur' }],
        miniId: [],
        miniUrl: [],
        region: [],
      },
    }
  },
  methods: {
    /**
     * 图片的上传和删除
     */
    handlePicChange({ fileList }) {
      console.log(fileList)
      this.fileList = fileList
    },
    /**
     * 确定添加图片
     */
    addTextConfirm() {
      this.createTextVisibleControl()
    },
    /**
     * 添加图片按钮
     */
    createTextVisibleControl() {
      this.createTextVisible = !this.createTextVisible
    },
    /**
     * 添加分类模态框弹出与关闭
     */
    typeModalControl() {
      this.typeModalVisible = !this.typeModalVisible
    },
    addTypeModalConfirm() {
      this.typeModalControl()
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
