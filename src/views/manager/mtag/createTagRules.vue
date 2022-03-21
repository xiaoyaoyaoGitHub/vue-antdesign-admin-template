<template>
  <section>
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>新建自动标签组规则</span>
    </header>
    <div class="content">
      <a-form :form="tagForms" :wrapper-col="{ span: 14 }" :label-col="{ span: 4 }">
        <a-form-item label="标签组名称">
          <a-input
            v-decorator="['note', { rules: [{ required: true, message: '请输入标签组名称' }] }]"
            type="text"
            placeholder="标签组名称"
          ></a-input>
        </a-form-item>
        <a-form-item label="标签">
          <a-button type="primary" ghost>跟进优先级高<a-icon type="more" /></a-button>
          <a-button v-decorator="['tags', { rules: [{ required: true }] }]" type="link"><a-icon type="plus" />添加</a-button>
        </a-form-item>
      </a-form>
      <a-divider orientation="left">跟进优先级高需标签客户需满足一下条件</a-divider>
      <a-form-model :model="tagFlowForm" :wrapper-col="{ span: 13 }" :label-col="{ span: 5 }">
        <a-form-model-item label="客户行为特征">
          <a-select v-model="tagFlowForm.region" placeholder="请选择">
            <a-select-option value="shanghai"> 有商机 </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="行为/特征设置(同时满足一下条件)">
          <div>
            <a-row :gutter="16">
              <a-col :span="2">
                <a-button type="default"><a-icon type="plus" /></a-button>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="请选择">
                  <a-select-option value="1"> 意向度 </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="请选择">
                  <a-select-option value="shanghai"> 有商机 </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="2">
                <a-button type="default"><a-icon type="plus" /></a-button>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="请选择">
                  <a-select-option value="1"> 预计成交时间 </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-col>
              <a-col :span="6">
                <a-input type="number" addon-before="近" addon-after="天" :default-value="100" />
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="2">
                <a-button type="default"><a-icon type="plus" /></a-button>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="请选择">
                  <a-select-option value="1"> 商业金额 </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-col>
              <a-col :span="4">
                <a-select placeholder="请选择">
                  <a-select-option value="1"> 商业金额 </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-col>
              <a-col :span="4">
                <a-input type="number" addon-after="元" :default-value="100" />
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="2">
                <a-button type="default"><a-icon type="plus" /></a-button>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="请选择">
                  <a-select-option value="1"> 商机创建时间 </a-select-option>
                  <a-select-option value="beijing"> Zone two </a-select-option>
                </a-select>
              </a-col>
              <a-col :span="6">
                <a-input type="number" addon-before="近" addon-after="天" :default-value="100" />
              </a-col>
            </a-row>
          </div>
        </a-form-model-item>
      </a-form-model>
      <a-form :wrapper-col="{ offset: 4 }">
        <a-form-item>
          <a-button type="primary">新建</a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script>
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'CreateTagRules',
  mixins: [mixinComponent],
  data() {
    return {
      tagForms: this.$form.createForm(this, { name: 'coordinated' }),
      tagFlowForm: {},
    }
  },
  methods: {
    back() {
      this.changeComponent('CreateAuto')
    },
  },
}
</script>
<style lang="less" scoped>
header {
  padding: 5px 0;
  margin: 0 -15px;
  border-bottom: 1px solid #eee;
  text-align: center;
  position: relative;
  line-height: 32px;
  .sc (14px, #000);
  button {
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.content {
  padding: 15px 0;
  .lists {
  }
  .card-item {
    text-align: center;
    background: #efefef;
    margin-bottom: 30px;
  }
}
</style>
