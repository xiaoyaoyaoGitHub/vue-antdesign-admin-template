<template>
  <section>
    <slot name="header"></slot>
    <div class="content">
      <!-- 查询条件 -->
      <a-form class="form" layout="inline">
        <a-form-item label="客户名称">
          <a-input placeholder="请输入客户名称" />
        </a-form-item>
        <a-form-item label="客户标签">
          <a-select style="width: 120px">
            <a-select-option value="jack"> Jack </a-select-option>
            <a-select-option value="lucy"> Lucy </a-select-option>
            <a-select-option value="Yiminghe"> yiminghe </a-select-option>
          </a-select>
        </a-form-item>
        <template v-if="more">
          <a-form-item label="手机号码">
            <a-input placeholder="请输入客户名称" />
          </a-form-item>
          <a-form-item label="添加人">
            <a-select style="width: 120px">
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
              <a-select-option value="Yiminghe"> yiminghe </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="添加时间">
            <a-range-picker>
              <template slot="dateRender" slot-scope="current">
                <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                  {{ current.date() }}
                </div>
              </template>
            </a-range-picker>
          </a-form-item>
          <a-form-item label="所在群聊">
            <a-select style="width: 120px">
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
              <a-select-option value="Yiminghe"> yiminghe </a-select-option>
            </a-select>
          </a-form-item>
        </template>
        <a-form-item>
          <a-button @click="moreSearch" type="link">更多筛选<a-icon type="down" /></a-button>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">查询</a-button>
        </a-form-item>
      </a-form>
      <!-- 表格 -->
      <div class="table">
        <a-space>
          <a-button type="primary" ghost>导出列表</a-button>
          <a-button type="primary" ghost @click="showTagModel">批量打客户标签</a-button>
          <a-button :loading="false" type="primary" ghost>同步客户列表</a-button>
        </a-space>
        <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"><a-icon type="smile-o" /> 客户</span>
          <span slot="ageTitle">第一添加人<a-icon type="info-circle" /> </span>

          <span slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </a-table>
      </div>
    </div>
    <!-- 批量打标签模态框 -->
    <a-modal class="tagModal" width="50%" title="批量打客户标签" :visible="tagVisible" @ok="showTagModel" @cancel="showTagModel">
      <a-input placeholder="搜索外部联系人">
        <a-icon slot="prefix" type="search" />
      </a-input>
      <div class="typeList">
        <h3>客户年龄</h3>
        <div class="list">
          <a-row type="flex" justify="start">
            <a-space class="wrap">
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
              <a-button type="default">20岁-30岁</a-button>
            </a-space>
          </a-row>
        </div>
        <h3>客户等级</h3>
        <div class="list">
          <a-row type="flex" justify="start">
            <a-space class="wrap">
              <a-button type="default">很好的客户</a-button>
              <a-button type="default">重要</a-button>
              <a-button type="default">核心</a-button>
              <a-button type="default">氛围</a-button>
              <a-button type="default">水电费</a-button>
            </a-space>
          </a-row>
        </div>
        <h3>客户忠诚度</h3>
        <div class="list">
          <a-row type="flex" justify="start">
            <a-space class="wrap">
              <a-button type="default">无意愿</a-button>
              <a-button type="default">高意愿</a-button>
              <a-button type="default">低意愿</a-button>
              <a-button type="default">B类客户</a-button>
            </a-space>
          </a-row>
        </div>
        <h3>客户地区</h3>
        <div class="list">
          <a-row type="flex" justify="start">
            <a-space class="wrap">
              <a-button type="default">华中</a-button>
              <a-button type="default">华北</a-button>
              <a-button type="default">华南</a-button>
            </a-space>
          </a-row>
        </div>
      </div>
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
  name: 'Custom',
  data() {
    return {
      form: {},
      columns,
      data,
      more: false,
      tagVisible: false,
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
    /**
     * 更多搜索
     */
    moreSearch() {
      this.more = !this.more
    },
    /**
     * 批量打客户标签
     */
    showTagModel() {
      this.tagVisible = !this.tagVisible
    },
  },
}
</script>
<style lang="less" scoped>
@import url('@/style/manager/mcuntom/custom');
</style>
