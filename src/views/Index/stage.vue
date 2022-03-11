<template>
  <section class="index-center">
    <section class="left">
      <section class="left-top borderRadius">
        <div class="title">中午好，骆冰</div>
        <div class="subtitle">你企业的客户总人数已达 <span>1,135</span> 人，客户群总人数已达 <span>833</span> 人</div>
        <a-divider />
        <div class="u-flex lineType">
          <template v-for="(item, index) in lineType">
            <div @click="selectType(index)" :key="index" :class="['item', { activity: typeIndex === index }]">
              <span>{{ item }}</span>
            </div>
          </template>
          <div class="item">
            <span>统计说明<a-icon type="right" style="fontsize: 12px" /></span>
          </div>
        </div>
        <!-- 图表 -->
        <div class="charts">
          <div class="u-flex time-select u-text-center">
            <div @click="timeSelect(0)" :class="[{ activity: timeSelectIdx === 0 }]">1周</div>
            <div @click="timeSelect(1)" :class="[{ activity: timeSelectIdx === 1 }]">1月</div>
          </div>
          <div id="line" ref="chart"></div>
        </div>
      </section>
      <!-- 模块左侧下部 -->
      <section class="left-bottom borderRadius u-flex custormTypes">
        <template v-for="(item, index) in customOperateType">
          <div :key="index" class="u-text-center">
            <img :src="item.icon" alt="" />
            <div class="desc">
              {{ item.title }}
            </div>
          </div>
        </template>
      </section>
    </section>
    <section class="right borderRadius">
      <section class="custom-dynamics borderRadius">
        <div class="title">顾客动态</div>
        <a-divider />
        <template>
          <a-timeline class="timeline">
            <a-timeline-item>
              <p>10:56</p>
              1304房间号顾客办理了退房手续</a-timeline-item
            >
            <a-timeline-item
              ><p>9:40</p>
              1601房间号顾客线上提交了打扫房间申请</a-timeline-item
            >
            <a-timeline-item
              ><p>10:56</p>
              1304房间号顾客办理了退房手续</a-timeline-item
            >
            <a-timeline-item color="#A5A5A5" class="gray"
              ><p>8:56</p>
              1605房间新入住两名顾客</a-timeline-item
            >
          </a-timeline>
        </template>
        <div class="checkMore u-text-center">查看更多<a-icon type="right" style="fontsize: 12px" /></div>
      </section>
      <section class="schedule borderRadius">
        <div class="title">日程管理</div>

        <div :style="{ width: '100%', borderRadius: '4px' }">
          <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
        </div>
        <a-empty :imageStyle="{ height: '20px' }">
          <div class="no-plan" slot="description">还没有日常</div>
        </a-empty>
        <div class="u-text-center">
          <a-button><a-icon type="plus" />添加日程</a-button>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'stage',
  data() {
    return {
      lineType: ['新增客户数', '活动新增客户', '聊天客户数', '流失客户数'],
      typeIndex: 0, //默认选中第一个
      timeSelectIdx: 0,
      // 客户操作
      customOperateType: [
        {
          icon: require('@/assets/consum2.png'),
          title: '员工活码',
        },
        {
          icon: require('@/assets/consum2.png'),
          title: '新客自动拉群',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '员工欢迎语',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '客户群活码',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '群发客户群',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '客户标签',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '任务宝',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '历史朋友圈',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '流失客户',
        },
        {
          icon: require('@/assets/consum1.png'),
          title: '海报素材',
        },
      ],
    }
  },
  components: {},
  watch: {},
  mounted() {
    this.init()
  },
  methods: {
    selectType(index) {
      this.typeIndex = index
    },
    timeSelect(idx) {
      this.timeSelectIdx = idx
    },
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('line'))
      // 绘制图表
      myChart.setOption({
        legend: {
          data: ['新增客户数', '新增客户群人数'],
        },
        grid: {
          left: '0',
          right: '0',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['11-0', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07'],
        },
        yAxis: {
          type: 'value',
        },
        color: ['#4885E0', '#AAE8BB'],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            name: '新增客户数',
          },
          {
            data: [8, 93, 90, 93, 190, 1330, 132],
            type: 'line',
            smooth: true,
            name: '新增客户群人数',
          },
        ],
      })
    },
  },
}
</script>

<style scoped lang="less">
@import url('@/style/index/stage.less');
</style>
