<template>
  <section class="moment">
    <slot name="header"></slot>
    <div class="content">
      <a-button type="primary" @click="createMoment">新建动态</a-button>
      <p class="btn-desc"><a-icon type="info-circle" />新建朋友圈动态后,客户可在企业成员的对话资料显示查看成员的朋友圈动态</p>
      <a-divider />
      <!-- 查询条件 -->
      <a-form layout="inline">
        <a-form-item label="关键词">
          <a-input placeholder="请输入关键词" />
        </a-form-item>
        <a-form-item label="发布时间">
          <a-range-picker show-time>
            <template slot="dateRender" slot-scope="current">
              <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                {{ current.date() }}
              </div>
            </template>
          </a-range-picker>
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
  name: 'Moment',
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
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
    createMoment() {
      this.changeComponent('CreateMoment')
    },
  },
}
</script>
<style lang="less" scoped>
@import url('@/style/marketing/wechat/moment.less');
</style>
