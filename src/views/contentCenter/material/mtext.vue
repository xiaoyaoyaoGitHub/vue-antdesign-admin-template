<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <!-- 新建按钮 -->
      <a-button type="primary" @click="createTextVisibleControl">新建文本</a-button>
      <p class="desc">
        <a-icon style="fontsize: 14px; color: #00b3a8" type="info-circle" />
        可在聊天工具栏,欢迎语,群发消息,历史朋友圈等功能使用
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
        <a-form-item label="文本标题/内容">
          <a-input v-decorator="['userName']" placeholder="文本标题/内容"> </a-input>
        </a-form-item>
        <a-form-item label="创建人">
          <a-select default-value="1" placeholder="所有人" style="width: 120px">
            <a-select-option value="1"> 所有人</a-select-option>
            <a-select-option value="2"> A 2 </a-select-option>
            <a-select-option value="3"> A 3 </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">查询</a-button>
          <a-button type="default">删除</a-button>
        </a-form-item>
      </a-form>
      <!-- 表格 -->
      <div class="table">
        <a-button class="editable-add-btn"> 全部 </a-button>
        <a-button class="editable-add-btn"> 批量导入 </a-button>
        <a-table
          rowKey="id"
          :columns="columns"
          :data-source="meterials"
          bordered
          :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        >
          <template v-for="col in ['mediaId', 'createTime']" :slot="col" slot-scope="text, record, index">
            <div :key="col">
              <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="(e) => handleChange(e.target.value, record.key, col, index)"
              />
              <template v-else>
                {{ text }}
              </template>
            </div>
          </template>
          <template slot="operation" slot-scope="text, record, index">
            <div class="editable-row-operations">
              <span v-if="record.editable">
                <a @click="() => save(record.key, index)">保存</a>
                <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                  <a>取消</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a>
                <a-divider type="vertical" />
                <a-popconfirm title="确认删除" @confirm="() => remove(record.key)">
                  <a>删除</a>
                </a-popconfirm>
              </span>
            </div>
          </template>
        </a-table>
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
    <a-modal title="新建文本" :visible="createTextVisible" width="50%" @ok="addTextConfirm" @cancel="createTextVisibleControl">
      <a-form-model ref="createTextForm" :rules="createFormRules" :model="createTextForm" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="文本标题" prop="title">
          <a-input v-model="createTextForm.title" type="textarea" placeholder="仅员工可见,方便查找和适用QA场景" />
        </a-form-model-item>
        <a-form-model-item label="文本分类" prop="type">
          <a-select v-model="createTextForm.type" placeholder="请选择">
            <a-select-option value="text"> 文本 </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="文本内容" prop="content">
          <a-input v-model="createTextForm.content" type="textarea" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </section>
</template>

<script>
const columns = [
  {
    title: '全部活码',
    dataIndex: 'mediaId',
    width: '25%',
    scopedSlots: { customRender: 'mediaId' },
  },
  {
    title: '添加人/添加时间',
    dataIndex: 'createTime',
    width: '40%',
    scopedSlots: { customRender: 'createTime' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
]

import { mapActions, mapState } from 'vuex'
import { QUERY_MATERIAL_LIST, METERIAL_ADD_TEXT } from '@/store/modules/material/type'
export default {
  name: 'Mtext',
  components: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      formClassiesType: this.$form.createForm(this, { name: 'addClassType' }),
      columns,
      editingKey: '',
      selectedRowKeys: [],
      typeModalVisible: false, // 分类模态框
      createTextVisible: false, //新建文本模态框
      createTextForm: {
        type: 'text',
        // title: '',
        content: '',
        group: '1',
        materialType: 'text',
      },
      createFormRules: {
        title: [
          {
            required: true,
            message: '请输入文本标题',
            trigger: 'blur',
          },
        ],
        type: [
          {
            required: true,
            message: '请选择文本类型',
            trigger: 'change',
          },
        ],
        content: [
          {
            required: true,
            message: '请输入文本内容',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {
    ...mapState({
      meterials: (state) => state.material.meterials,
    }),
  },
  created() {
    this.QUERY_MATERIAL_LIST()
  },
  methods: {
    ...mapActions([QUERY_MATERIAL_LIST, METERIAL_ADD_TEXT]),
    /**
     * 确定添加文本
     */
    addTextConfirm() {
      this.materialAddText()
    },
    /**
     * 添加文本
     */
    materialAddText() {
      this.$refs.createTextForm.validate(async (valid) => {
        if (valid) {
          console.log(this.createTextForm)
          const { code, data } = await this.METERIAL_ADD_TEXT(this.createTextForm)
          if (code === 200) {
            // 新增成功
            this.createTextVisibleControl()
            this[QUERY_MATERIAL_LIST]()
          }
        }
      })
    },
    /**
     * 新建文本模态框弹出与关闭
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
@import url('@/style/cententCenter/material/mtext.less');
</style>
