<template>
  <section class="lists">
    <!-- 表格 -->
    <a-table class="table" :columns="columns" :data-source="data">
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="address">
        <a>启用</a>
      </span>
      <span slot="action">
        <a @click="showDrawer">点击查看</a>
      </span>
    </a-table>
    <a-drawer
      width="40%"
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
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
    title: '当前状态',
    dataIndex: 'address',
    key: 'address',
    scopedSlots: { customRender: 'address' },
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
  name: 'SopList',
  data() {
    return {
      columns,
      data,
      visible: false,
    }
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val)
    },
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>

<style lang="less" scoped>
.lists {
  margin-left: 15px;
  height: 100%;
  overflow: auto;
  background: #fff;
}
</style>
