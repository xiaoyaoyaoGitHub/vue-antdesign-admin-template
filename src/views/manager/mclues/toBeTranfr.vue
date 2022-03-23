<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <a-space>
        <a-button type="primary">导入线索</a-button>
        <a-button type="default">新建线索</a-button>
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
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="线索状态">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="跟进入">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="手机号码">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="标签">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="获客渠道">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item label="所属线索池">
          <a-input placeholder="请输入"></a-input>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary">查询</a-button>
            <a-button type="default">重置</a-button>
          </a-space>
        </a-form-item>
      </a-form>
      <!-- 表格 -->
      <div class="table">
        <a-space>
          <a-button>指定跟进人</a-button>
          <a-button>变更线索池</a-button>
          <a-button>导出</a-button>
          <a-button>删除</a-button>
        </a-space>
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
    // title: '第一添加人',
    slots: { title: 'ageTitle' },
    scopedSlots: { customRender: 'age' },
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '添加时间',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  {
    key: '1',
    name: '张三',
    age: '吃土养活猫的安安',
    address: '2021-04-18 16:00',
    tags: ['客户添加', '经常'],
  },
  {
    key: '2',
    name: '李四',
    age: '星星',
    address: '2021-04-18 16:00',
    tags: ['一般'],
  },
  {
    key: '3',
    name: '李涵',
    age: 32,
    address: '2021-04-18 16:00',
    tags: ['测试测试'],
  },
]
export default {
  name: 'ToBeTranfr',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      data,
      columns,
    }
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
