<template>
  <section>
    <!-- 标题 -->
    <slot name="header"></slot>
    <!-- 内容 -->
    <div class="content">
      <a-button @click="createPoster" type="primary">添加海报</a-button>
      <!-- <a-alert message="Success Tips" type="success" show-icon /> -->
      <p class="desc">
        <a-icon style="fontsize: 14px; color: #00b3a8" type="info-circle" />
        添加海报素材后,可用于移动端制作海报,创建员工分享通知等功能
      </p>
      <a-divider />
      <!-- 查询 -->
      <a-form class="form" layout="inline">
        <a-form-item>
          <a-input v-decorator="['search']" placeholder="搜索海报素材">
            <a-icon slot="prefix" type="search" style="color: rgba(0, 0, 0, 0.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">查询</a-button>
          <a-button type="primary">导出列表</a-button>
          <a-button type="primary">批量提醒打标签</a-button>
        </a-form-item>
      </a-form>
      <!-- 分类 -->
      <div class="classify u-flex">
        <div class="label">分类:</div>
        <div class="classes">
          <span :class="[{ selected: index === 1 }]" v-for="(item, index) in [1, 2, 4, 5]" :key="index">全部</span>
        </div>
      </div>
      <div class="select-all">
        <a-checkbox> 全选 </a-checkbox>
      </div>
      <!-- 查询内容 -->
      <div class="query-content u-flex">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Poster',
  props: {
    changeComponent: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    createPoster() {
      this.changeComponent('CreatePoster')
    },
  },
}
</script>

<style lang="less" scoped>
@import url('@/style/cententCenter/poster/poster.less');
</style>
