<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <p>自动标签</p>
      <a-form layout="inline">
        <a-form-item>
          <a-input>
            <a-icon slot="prefix" type="search" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary">查询</a-button>
            <a-button @click="createAutoTag" type="primary">新建自动标签组</a-button>
          </a-space>
        </a-form-item>
      </a-form>
      <a-table class="table" :columns="columns" :data-source="data">
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
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'Auto',
  mixins: [mixinComponent],
  data() {
    return {
      data,
      columns,
    }
  },
  methods: {
    createAutoTag() {
      this.changeComponent('CreateAuto')
    },
  },
}
</script>
<style lang="less" scoped>
.content {
  padding: 24px 0;
}
.table {
  margin: 15px 0;
}
</style>
