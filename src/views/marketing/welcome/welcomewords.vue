<template>
  <section class="welcome">
    <slot name="header"></slot>
    <div class="welcom-center">
      <!-- 新建按钮 -->
      <a-button type="primary" @click="createTextVisibleControl">新建欢迎语</a-button>
      <p class="desc">
        <a-icon style="fontsize: 14px; color: #00b3a8" type="info-circle" />
        由管理员或者业务负责人统一配置,配置后,客户将在添加成员或者联系人后收到该欢迎语
      </p>
      <a-divider />
      <!-- 查询 -->
      <a-form layout="inline">
        <a-form-item label="关键词">
          <a-input placeholder="请输入关键词" />
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
import { mixinComponent } from '@/utils/mixin'

export default {
  name: 'Welcomwrods',
  mixins: [mixinComponent],
  data() {
    return {
      current: ['staff'],
      data,
      columns,
    }
  },
  components: {},
  watch: {},
  methods: {
    createTextVisibleControl() {
      this.changeComponent('CreateWords')
    },
  },
}
</script>

<style scoped lang="less">
@import url('@/style/marketing/welcome/welcomewords.less');
</style>
