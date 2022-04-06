<template>
  <section class="sop-content">
    <a-form class="form" :form="form" :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }">
      <a-form-item label="请选择任务">
        <a-select v-decorator="['sopId', { rules: [{ required: true, message: '请选择任务' }] }]">
          <a-select-option :value="item.id" :key="index" v-for="(item, index) in sopList"> {{ item.sopName }} </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="请选择执行时间">
        <a-input placeholder="多少天后执行" v-decorator="['executeAfterDays', { rules: [{ required: true, message: '请输入' }] }]" />
      </a-form-item>
      <a-form-item label="选择执行时间">
        <a-time-picker
          format="HH:mm"
          :show-time="{ defaultValue: moment('00:00', 'HH:mm') }"
          v-decorator="['executeTime', { rules: [{ required: true, message: '请选择执行时间' }] }]"
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
          <a-button :loading="loading" type="primary" @click="save">保存</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </section>
</template>

<script>
import moment from 'moment'
import SelectComponent from './selectComponent.vue'
import { QUERY_SOP_LIST } from '@/store/modules/sop/type'
import { xhotelSopJobSave } from '@/api/marketing/sop'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CreateSopTask',
  components: { SelectComponent },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'sopForm' }),
      contentList: [],
      loading: false,
    }
  },
  computed: {
    ...mapState({
      hotelCode: (state) => state.user.hotelCode,
      sopList: (state) => state.sop.sopList,
    }),
  },
  created() {
    this.QUERY_SOP_LIST({ hotelCode: this.hotelCode })
  },
  methods: {
    ...mapActions([QUERY_SOP_LIST]),
    moment,
    range(start, end) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    },
    save() {
      const executeContent = { attachments: [], text: '', chat_type: 'single' }
      const cpts = this.$refs['selectComponent']
      if (!cpts) return
      cpts.forEach((item) => {
        // console.log(item.getInfo())
        const info = item.getInfo()
        if (info.msgtype === 'text') {
          // 文本
          executeContent.text = { content: info.content }
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
      this.form.validateFields(async (err, value) => {
        value.executeTime = value.executeTime.format('hh:mm')
        // console.log()
        const params = { executeContent: JSON.stringify(executeContent), hotelCode: this.hotelCode, ...value }
        console.log(params)
        this.loading = true

        const res = await xhotelSopJobSave(params)
        if (res.code === 200) {
          this.loading = false
          this.$message.success('保存成功')
        } else {
          this.$message.error('保存失败')
        }
        // console.log(res)
      })
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
    addContent() {
      this.contentList = this.contentList.concat({ id: new Date().getTime() })
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
