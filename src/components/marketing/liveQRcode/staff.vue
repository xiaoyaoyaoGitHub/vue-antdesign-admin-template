<template>
  <section class="staff">
    <p class="desc">新建员工活码后，客户可以通过扫描活码添加成员好友，自动给客户打标签和发送欢迎语。</p>
    <a-divider />
    <a-form class="form" layout="inline">
      <a-form-item label="活码名称">
        <a-input placeholder="Basic usage" />
      </a-form-item>
      <a-form-item label="创建人">
        <a-input placeholder="Basic usage" />
      </a-form-item>
      <a-form-item label="创建时间">
        <a-input placeholder="Basic usage" />
      </a-form-item>
      <a-form-item label="使用员工">
        <a-input placeholder="Basic usage" />
      </a-form-item>
      <a-button type="primary">查询</a-button>
    </a-form>
    <!-- <a-divider orientation="left">表格展示：</a-divider> -->
    <a-table
      :locale="locale"
      :columns="columns"
      :rowKey="(record) => record.login.uuid"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
    </a-table>
  </section>
</template>

<script>
import { getList } from '@/api/example/table'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
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
    }
  },
  computed: {
    noData() {
      return this.data.length === 0
    },
  },
  watch: {},
  mounted() {
    this.getList()
  },
  methods: {
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
          this.data = res.results
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
  },
}
</script>
<style scoped lang="less">
@import url('@/style/marketing/liveQRcode/staff.less');
</style>
