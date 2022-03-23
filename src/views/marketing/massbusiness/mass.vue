<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <a-space>
        <a-button type="primary">新建企业群发</a-button>
        <p class="btn-desc">
          <a-icon style="fontsize: 14px; color: #00b3a8" type="info-circle" />
          添加线索后,可以分配线索给员工快速跟进,转化为客户
        </p>
      </a-space>
      <a-divider></a-divider>
      <!-- 查询条件 -->
      <a-form class="form" :form="form" layout="inline">
        <a-form-item label="企业名称">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="企业名称">
          <a-range-picker>
            <template slot="dateRender" slot-scope="current">
              <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                {{ current.date() }}
              </div>
            </template>
          </a-range-picker>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary">查询</a-button>
          </a-space>
        </a-form-item>
      </a-form>
      <!-- 表格 -->
      <div class="table">
        <a-table class="" :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"><a-icon type="smile-o" /> 消息内容</span>
          <!-- <span slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span> -->
          <span slot="action" slot-scope="text, record">
            <a>编辑</a>
            <a-divider type="vertical" />
            <a>删除</a>
          </span>
        </a-table>
      </div>
    </div>
  </section>
</template>

<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '群发类型',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '创始人',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '创建时间',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '发送情况',
    key: 'tags1',
    dataIndex: 'tags1',
    scopedSlots: { customRender: 'tags1' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    name: '[小程序][2人团]0.01...',
    age: '发送客户',
    address: '张三',
    tags: '2021-05-06 12:30',
    tags1: '预计发送客户9人...',
  },
  {
    key: '2',
    name: '[小程序][2人团]0.01...',
    age: '发送客户',
    address: '李四',
    tags: '2021-05-06 12:30',
    tags1: '预计发送客户9人...',
  },
  {
    key: '3',
    name: '[小程序][2人团]0.01...',
    age: '发送客户',
    address: '王五',
    tags1: '预计发送客户9人...',
    tags: '2021-05-06 12:30',
  },
]

export default {
  name: 'MassBusiness',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      data,
      columns,
    }
  },
  methods: {
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
  },
}
</script>
<style lang="less" scoped>
.content {
  padding: 24px 0;
  .table {
    padding: 15px 0;
    button {
      margin-bottom: 15px;
    }
  }
}
</style>
