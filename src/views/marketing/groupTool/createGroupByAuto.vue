<template>
  <section class="create-groupBy-tag">
    <!-- 新建 -->
    <div class="content">
      <header>
        <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
        <span>新建自动拉群</span>
      </header>
      <!-- 查询 -->
      <a-form-model class="form" :model="form" :rules="rules" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-model-item label="使用成员" ref="user" prop="user">
          <a-input
            v-model="form.user"
            @blur="
              () => {
                $refs.user.onFieldBlur()
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="使用员工" prop="staffs">
          <a-button type="link">添加</a-button>
          <p class="desc">使用员工最多可选100人</p>
        </a-form-model-item>
        <a-form-model-item label="添加设置">
          <a-checkbox> 添加客户时无需经过确认自动成为好友 </a-checkbox>
        </a-form-model-item>
        <a-form-model-item label="新客户标签">
          <a-button type="link">添加标签</a-button>
        </a-form-model-item>
        <a-form-model-item label="入群引导语" prop="guides">
          <a-textarea v-model="form.guides" placeholder="请输入" :auto-size="{ minRows: 2, maxRows: 6 }" />
        </a-form-model-item>
        <a-form-model-item label="选择群活码" prop="guides">
          <a-button type="link">选择</a-button>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary">确认</a-button>
          <a-button type="default">取消</a-button>
          <span><a-icon type="info-circle" />通知成员,向选中的客户发送以上消息</span>
        </a-form-model-item>
      </a-form-model>
    </div>
  </section>
</template>

<script>
export default {
  name: 'createGroupByAuto',
  data() {
    return {
      rules: {
        user: [{ required: true, message: '请输入员工', trigger: 'blur' }],
        staffs: [
          {
            required: true,
          },
        ],
        guides: [
          {
            required: true,
            message: '请输入引导语',
          },
        ],
      },
      form: {
        user: '',
      },
    }
  },
  props: {
    changeComponent: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    back() {
      this.changeComponent('AutoGroup')
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/marketing/groupTool/createGroupByTag.less');
</style>
