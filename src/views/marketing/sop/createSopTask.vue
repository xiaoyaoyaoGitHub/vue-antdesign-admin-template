<template>
  <section class="sop-content">
    <a-form class="form" :form="form" :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }">
      <a-form-item label="请选择执行时间">
        <a-input placeholder="多少天后执行" v-decorator="['afterDays', { rules: [{ required: true, message: '请输入' }] }]" />
      </a-form-item>
      <a-form-item label="选择执行时间">
        <a-date-picker
          format="YYYY-MM-DD HH:mm:ss"
          :disabled-date="disabledDate"
          :disabled-time="disabledDateTime"
          :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
          v-decorator="['time', { rules: [{ required: true, message: '请选择执行时间' }] }]"
        />
      </a-form-item>
      <a-form-item label="请输入发送内容">
        <template v-for="(item, index) in contentList">
          <keep-alive :key="item.id">
            <SelectComponent :idx="item.id + index" @remove="remove" ref="selectComponent" />
          </keep-alive>
        </template>
        <a-space>
          <a-button type="primary" @click="addContent">添加内容</a-button>
        </a-space>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4 }">
        <a-space>
          <a-button type="primary" @click="save">保存</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </section>
</template>

<script>
import moment from 'moment'
import SelectComponent from './selectComponent.vue'
import { nextTick } from 'vue'
export default {
  name: 'CreateSopTask',
  components: { SelectComponent },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      contentList: [],
    }
  },
  methods: {
    moment,
    range(start, end) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    },
    save() {
      const executeContent = { attachments: [], text: '' }
      const cpts = this.$refs['selectComponent']
      cpts.forEach((item) => {
        // console.log(item.getInfo())
        const info = item.getInfo()
        if (info.msgtype === 'text') {
          // 文本
          executeContent.text = info.content
        }
        if (info.msgtype === 'image') {
          executeContent.attachments.push(info)
        }
        if (info.msgtype === 'link') {
          executeContent.attachments.push(info)
        }
        if (info.msgtype === 'miniprogram') {
          executeContent.attachments.push(info)
        }
      })
      console.log(executeContent)
    },
    remove(idx) {
      const currentContentList = this.contentList.concat()
      const selectComponent = this.$refs['selectComponent']
      const removeIndex = selectComponent.findIndex((item, index) => item._uid === idx)
      console.log(removeIndex)
      currentContentList.splice(removeIndex, 1)
      this.$nextTick(() => {
        this.contentList = currentContentList
        console.log(currentContentList)
      })
    },
    disabledDate(current) {
      return current && current < moment().endOf('day')
    },
    addContent() {
      this.contentList = this.contentList.concat({ id: new Date().getTime() })
    },
    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      }
    },
  },
}
</script>

<style lang="less" scoped>
.sop-content {
  margin-left: 15px;
  padding-top: 30px;
  background: #fff;
  height: 100%;
  overflow: auto;
  .form {
  }
}
</style>
