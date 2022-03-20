<template>
  <section>
    <header>
      <a-button class="back" type="primary" @click="back"> <a-icon type="left" />返回 </a-button>
      <span>新建群发客户</span>
    </header>
    <div class="content">
      <a-form :wrapper-col="{ span: 14 }" :label-col="{ span: 4 }">
        <a-form-item label="发送范围">
          <a-radio-group v-model="radioVal" @change="onChange">
            <a-radio :value="1"> 全部客户 </a-radio>
            <a-radio :value="2"> 按条件筛选客户 </a-radio>
          </a-radio-group>
          <div v-if="radioVal === 1">预计送达人数</div>
        </a-form-item>
      </a-form>
      <a-form-model v-if="radioVal === 1" :wrapper-col="{ span: 8 }" :label-col="{ span: 4 }">
        <a-form-model-item label="发送内容">
          <a-textarea placeholder="Controlled autosize" :auto-size="{ minRows: 3, maxRows: 5 }" />
          <a-space>
            <a-button type="primary" ghost><a-icon type="plus" />从本地上传</a-button>
            <a-button type="primary" ghost><a-icon type="plus" />从素材中心上传</a-button>
            <a-button type="primary" ghost><a-icon type="plus" />从商品和活动选择</a-button>
          </a-space>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ offset: 4 }">
          <a-space>
            <a-button type="primary">通知员工发送</a-button>
            <a-button type="default">定时发送</a-button>
          </a-space>
        </a-form-model-item>
      </a-form-model>
      <a-form-model :mode="formBycondition" v-else :wrapper-col="{ span: 8 }" :label-col="{ span: 4 }">
        <a-form-model-item label="添加人">
          <a-select v-model="formBycondition.region" placeholder="please select your zone">
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="添加时间">
          <a-range-picker>
            <template slot="dateRender" slot-scope="current">
              <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                {{ current.date() }}
              </div>
            </template>
          </a-range-picker>
        </a-form-model-item>
        <a-form-model-item label="客户标签">
          <a-button type="link">选择标签</a-button>
        </a-form-model-item>
        <a-form-model-item label="剔除标签">
          <a-button type="link">选择标签</a-button>
        </a-form-model-item>
        <a-form-model-item label="所在群聊">
          <a-button type="link">选择群聊</a-button>
        </a-form-model-item>
        <a-form-model-item label="客户性别">
          <a-radio-group v-model="formBycondition.resource">
            <a-radio value="1"> 全部 </a-radio>
            <a-radio value="2"> 男 </a-radio>
            <a-radio value="3"> 女 </a-radio>
            <a-radio value="4"> 性别未知 </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="客户年龄">
          <a-input-group size="large">
            <a-row :gutter="8">
              <a-col :span="5">
                <a-input />
              </a-col>
              <a-col :span="1"> _ </a-col>
              <a-col :span="5">
                <a-input />
              </a-col>
              岁
            </a-row>
          </a-input-group>
        </a-form-model-item>
        <a-form-model-item label="备注名关键词">
          <a-textarea placeholder="Controlled autosize" :auto-size="{ minRows: 3, maxRows: 5 }" />
        </a-form-model-item>
        <a-form-model-item label="描述关键词">
          <a-textarea placeholder="Controlled autosize" :auto-size="{ minRows: 3, maxRows: 5 }" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ offset: 4 }">
          <a-space>
            <a-button type="primary">通知员工发送</a-button>
            <a-button type="default">定时发送</a-button>
          </a-space>
        </a-form-model-item>
      </a-form-model>
    </div>
  </section>
</template>

<script>
import { mixinComponent } from '@/utils/mixin'
export default {
  name: 'CreateGroup',
  mixins: [mixinComponent],
  data() {
    return {
      radioVal: 2,
      formBycondition: {
        region: '',
      },
    }
  },
  methods: {
    back() {
      this.changeComponent('Group')
    },
    onChange() {},
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/manager/mgroup/createGroup');
</style>
