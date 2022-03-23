<template>
  <div>
    <slot name="header"></slot>
    <section class="staff">
      <p class="desc">新建员工活码后，客户可以通过扫描活码添加成员好友，自动给客户打标签和发送欢迎语。</p>
      <a-button type="primary" @click="showModal">新建员工活码</a-button>

      <a-divider />
      <a-form class="form" layout="inline">
        <a-form-item label="活码名称">
          <a-input placeholder="请输入活码名称" />
        </a-form-item>
        <a-form-item label="创建人">
          <a-select ref="select" :value="selectCreator" style="width: 120px" @change="handleChange">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="创建时间">
          <a-range-picker />
        </a-form-item>
        <a-form-item label="使用员工">
          <a-select ref="select" :value="selectUseStaff" style="width: 120px" @change="handleChange">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </a-form-item>
        <a-button type="primary">查询</a-button>
      </a-form>
      <!-- <a-divider orientation="left">表格展示：</a-divider> -->
      <div class="table-operations">
        <a-button>下载</a-button>
        <a-button>删除</a-button>
      </div>
      <a-table
        :locale="locale"
        :columns="columns"
        :rowSelection="rowSelection"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <span slot="operate">
          <a>编辑</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </span>
      </a-table>
      <a-modal width="50%" title="新建员工活码" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel"> </a-modal>
    </section>
  </div>
</template>

<script>
import { getList } from '@/api/example/table'

const columns = [
  {
    title: '全部活码',
    dataIndex: 'name',
    sorter: true,
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '创建人',
    dataIndex: 'gender',
  },
  {
    title: '使用员工',
    dataIndex: 'email1',
    ellipsis: true,
  },
  {
    title: '总客户数',
    dataIndex: 'email2',
    ellipsis: true,
  },
  {
    title: '昨日新增客户数',
    dataIndex: 'email3',
    ellipsis: true,
  },
  {
    title: '创建日期',
    dataIndex: 'email4',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'operate',
    ellipsis: true,
    scopedSlots: { customRender: 'operate' },
  },
]

const data = [
  {
    key: '1',
    name: '张三',
    gender: '幕城',
    email1: '幕城',
    email2: '-',
    email3: '-',
    email4: '2021-05-06 18:30',
  },
  {
    key: '2',
    name: '李四',
    gender: '幕城',
    email1: '幕城',
    email2: '-',
    email3: '-',
    email4: '2021-05-06 18:30',
  },
  {
    key: '4',
    name: '王五',
    gender: '幕城',
    email1: '幕城',
    email2: '-',
    email3: '-',
    email4: '2021-05-06 18:30',
  },
]

export default {
  name: 'StaffCode',
  components: {},
  data() {
    return {
      data: [],
      pagination: {
        showSizeChanger: true,
      },
      loading: false,
      columns,
      locale: {
        emptyText: '数据加载中...',
      },
      current: ['staff'],
      selectCreator: '', // 选择创建人
      selectUseStaff: '',
      // 弹出对话框入参
      confirmLoading: false,
      visible: false, // 模态框是否展示
    }
  },
  props: {
    changeComponent: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    noData() {
      return this.data.length === 0
    },
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        getCheckboxProps: (record) => ({
          // props: {
          //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
          //   name: record.name,
          // },
        }),
      }
    },
  },
  watch: {},
  mounted() {
    this.getList()
  },
  methods: {
    // 新建员工活码
    createEmployeeCode() {},
    // 选择创建人
    handleChange(value) {
      this.selectCreator = value
    },
    handleTableChange(pagination, filters, sorter) {
      // console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.getList({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      })
    },
    getList(params = {}) {
      this.loading = true
      getList({ results: 10, ...params })
        .then((res) => {
          const pagination = { ...this.pagination }
          pagination.total = 100
          this.loading = false
          this.data = data
          this.pagination = pagination
        })
        .finally((f) => {
          this.locale.emptyText = '暂无数据'
        })
    },
    resetList() {
      this.data = []
      this.pagination = {
        showSizeChanger: true,
        total: 0,
      }
      this.loading = false
    },
    showModal() {
      // this.visible = true
      this.changeComponent('CreateEmployee')
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
  },
}
</script>
<style scoped lang="less">
@import url('@/style/marketing/liveQRcode/staff.less');
</style>
