<template>
  <section class="lists">
    <!-- 表格 -->
    <a-table class="table" rowKey="id" :columns="columns" :data-source="sopList">
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="peopleTag" slot-scope="text"> {{ CUSTOMER[text] }}</span>
      <span slot="enableFlag" slot-scope="text">
        <a>{{ text }}</a>
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="showDrawer(record)">点击查看</a>
      </span>
    </a-table>
    <a-drawer
      width="40%"
      title="任务列表"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <template v-for="(itemContent, index) in jobLists">
        <div :key="index">
          <p>{{ itemContent.info.text.content }}</p>
          <a-list :data-source="itemContent.info.attachments">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <template v-if="item.msgtype === 'image'">
                <!-- <a>{{ item }}</a> :src="item.image.pic_url"-->
                <a-card :title="item.image.title">
                  <img width="200" height="100" :src="item.image.pic_url" alt="" />
                </a-card>
              </template>
              <template v-if="item.msgtype === 'link'">
                <a-card :title="item.link.title">
                  <p>图文描述:{{ item.link.desc }}</p>
                  <p>图文地址:{{ item.link.path }}</p>
                  <img width="200" height="100" :src="item.link.picurl" alt="" />
                </a-card>
                <!-- <a-list-item-meta>
                  <a-avatar slot="avatar" :src="item.link.picurl" />
                </a-list-item-meta> -->
              </template>
            </a-list-item>
          </a-list>
          <a-divider />
        </div>
      </template>
    </a-drawer>
  </section>
</template>

<script>
const columns = [
  {
    title: '流程名称',
    dataIndex: 'sopName',
    key: 'sopName',
    slots: { title: 'sopName' },
    scopedSlots: { customRender: 'sopName' },
  },
  {
    title: '流程人群',
    dataIndex: 'peopleTag',
    key: 'peopleTag',
    // slots: { title: 'peopleTag' },
    scopedSlots: { customRender: 'peopleTag' },
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '当前状态',
    dataIndex: 'enableFlag',
    key: 'enableFlag',
    scopedSlots: { customRender: 'enableFlag' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const CUSTOMER = {
  new_customer: '新用户',
  twice_customer: '老用户',
  usually_customer: '常驻用户',
}

import { QUERY_SOP_LIST, QUERY_SOP_DETAIL, QUERY_JOB_LIST } from '@/store/modules/sop/type'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'SopList',
  data() {
    return {
      columns,
      visible: false,
      CUSTOMER,
    }
  },
  computed: {
    ...mapState({
      hotelCode: (state) => state.user.hotelCode,
      sopList: (state) => state.sop.sopList,
      jobLists: (state) => {
        const currLists = state.sop.jobLists.concat()
        currLists.map((item) => (item.info = JSON.parse(item.executeContent)))
        console.log(currLists)
        return currLists
      },
    }),
  },
  created() {
    this.QUERY_SOP_LIST({ hotelCode: this.hotelCode })
  },
  methods: {
    ...mapActions([QUERY_SOP_LIST, QUERY_SOP_DETAIL, QUERY_JOB_LIST]),
    afterVisibleChange(val) {
      console.log('visible', val)
    },
    async showDrawer(params) {
      console.log(params)

      await this.QUERY_JOB_LIST({ hotelCode: this.hotelCode, sopId: params.id })
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
