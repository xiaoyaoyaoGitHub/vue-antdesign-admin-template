<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <p>新建手动标签后,系统会根据客户行为自动为客户打标签,方便员工及时识别客户特征,筛选客户,群发消息</p>
      <a-form layout="inline">
        <a-form-item>
          <a-input>
            <a-icon slot="prefix" type="search" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary">查询</a-button>
            <a-button @click="createModelControl" type="primary">新建标签组</a-button>
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
    <!-- 新建标签组 -->
    <a-modal width="50%" title="新建标签" :visible="tagVisible" @ok="createTag" @cancel="createModelControl">
      <a-form-model ref="tagForm" :rules="tagFormRules" :model="tagForm" :wrapper-col="{ span: 14 }" :label-col="{ span: 4 }">
        <a-form-model-item prop="tagName" ref="tagName" label="标签组名称">
          <a-input v-model="tagForm.tagName"></a-input>
        </a-form-model-item>
        <a-form-model-item props="tags" ref="tags" label="标签">
          <div class="lists">
            <a-popconfirm title="确认删除吗" ok-text="确认" cancel-text="取消">
              <a-button type="default"><a-icon type="more" />美妆</a-button>
            </a-popconfirm>
          </div>
          <div>
            <a-button type="primary"><a-icon type="plus" />添加标签</a-button>
          </div>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
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
  name: 'Manual',
  mixins: [mixinComponent],
  data() {
    return {
      data,
      columns,
      tagVisible: false,
      tagForm: {},
      tagFormRules: {
        tagName: [
          {
            required: true,
            message: '请输入标签组名称',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    createModelControl() {
      this.tagVisible = !this.tagVisible
    },
    createTag() {
      this.createModelControl()
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
