<template>
  <section class="auto-group">
    <slot name="header"></slot>
    <!-- 新建 -->
    <div class="content">
      <p class="desc">新建自动拉群后,客户通过员工活码添加员工,自动发送入群引导语,群活码,客户扫码进群</p>

      <a-button type="primary" @click="createGroupByAuto">新建自动拉群</a-button>
      <a-button type="primary" ghost>功能介绍</a-button>
      <a-divider />
      <!-- 查询 -->
      <a-form layout="inline">
        <a-form-item>
          <a-input placeholder="请输入关键词">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">查询</a-button>
        </a-form-item>
      </a-form>
      <!-- 表格 -->
      <a-table class="table" :columns="columns" :data-source="data">
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="action">
          <a>编辑</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </span>
      </a-table>
    </div>
  </section>
</template>

<script>
const columns = [
  {
    title: '类型',
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '内容',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '备注',
    dataIndex: 'address',
    key: 'address',
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
    name: '文本',
    age: '#客户昵称#您好,欢迎你',
    address: '固定欢迎语',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '文本',
    age: '#客户昵称#您好,欢迎你',
    address: '活动欢迎语',
    tags: ['loser'],
  },
  {
    key: '3',
    name: '文本',
    age: '#客户昵称#您好,欢迎你',
    address: '分段欢迎语',
    tags: ['cool', 'teacher'],
  },
]
export default {
  name: 'AutoGroup',
  data() {
    return {
      data,
      columns,
    }
  },
  props: {
    changeComponent: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    createGroupByAuto() {
      this.changeComponent('CreateGroupByAuto')
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/marketing/groupTool/autoGroup.less');
</style>
