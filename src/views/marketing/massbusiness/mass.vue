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
          <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
          <span slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
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
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
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
