<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <!-- 新建按钮 -->
      <a-button type="primary">新建文本</a-button>
      <p class="desc">
        <a-icon style="fontsize: 14px; color: #00b3a8" type="info-circle" />
        可在聊天工具栏,欢迎语,群发消息,历史朋友圈等功能使用
      </p>
      <a-divider />
      <!-- 分类 -->
      <div class="classifies">
        <div class="label">分类:</div>
        <div class="class-content">
          <a-button type="primary" ghost><a-icon type="plus" />添加分类</a-button>
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
        <a-table :columns="columns" :data-source="data" bordered :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
          <template v-for="col in ['name', 'operator']" :slot="col" slot-scope="text, record, index">
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
  </section>
</template>

<script>
const columns = [
  {
    title: '活码',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '添加人/添加时间',
    dataIndex: 'operator',
    width: '40%',
    scopedSlots: { customRender: 'operator' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    operator: `London Park no. ${i}`,
  })
}
export default {
  name: 'Mtext',
  components: {},
  data() {
    this.cacheData = data.map((item) => ({ ...item }))
    return {
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
      data,
      columns,
      editingKey: '',
      selectedRowKeys: [],
    }
  },
  methods: {
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
