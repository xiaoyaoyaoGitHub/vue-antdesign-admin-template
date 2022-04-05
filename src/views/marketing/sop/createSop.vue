<template>
  <section class="sop-content">
    <a-form class="form" @submit="handleSubmit" :form="form" :wrapper-col="{ span: 10 }" :label-col="{ span: 4 }">
      <a-form-item label="请输入sop流程名称">
        <a-input v-decorator="['sopName', { rules: [{ required: true, message: '请输入sop流程名称' }] }]" />
      </a-form-item>
      <a-form-item label="选择用户群">
        <a-space>
          <a-button
            v-for="(item, index) in typeList"
            :key="index"
            data-type="新用户"
            @click="chooseType(item)"
            :type="type === item ? 'primary' : 'default'"
            >{{ item }}</a-button
          >
          <!-- <a-button data-type="老用户" @click="chooseType('老用户')" type="default">老用户</a-button>
          <a-button data-type="常用用户" @click="chooseType('常用用户')" type="default">常用用户</a-button> -->
          <a-input hidden v-decorator="['peopleTag', { rules: [{ required: true, message: '请选择用户群' }] }]"></a-input>
          <!-- <a-select> </a-select> -->
        </a-space>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4 }">
        <a-button type="primary" html-type="submit">保存</a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { CREATE_SOP } from '@/store/modules/sop/type'
export default {
  name: 'CreateSop',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'createSop' }),
      type: '',
      typeList: ['新用户', '老用户', '常用用户'],
    }
  },
  methods: {
    ...mapActions([CREATE_SOP]),
    async createSop(data) {
      const { code, data: result } = await this.CREATE_SOP(data)
      console.log(code)
      if (code === 200) {
        this.$message.success('创建成功')
      } else {
        this.$message.error('创建失败')
      }
    },
    /**
     * 选择类型
     */
    chooseType(e) {
      // console.log(this.type)
      this.type = e
      console.log(this.type)
      this.form.setFieldsValue({
        peopleTag: e,
      })
    },
    /**
     * 点击保存
     */
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((valid, values) => {
        if (!valid) {
          this.createSop(values)
        }
      })
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
  .form {
  }
}
</style>
