<template>
  <section class="welcome">
    <div>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="staff"> <a-icon type="mail" />欢迎语 </a-menu-item>
      </a-menu>
    </div>
    <!-- <h1>富文本测试</h1>
    <tinymce class="tiny" v-model="content1" :height="300" />
    <tinymce class="tiny" v-model="content2" :height="300" /> -->
  </section>
</template>

<script>
// import Tinymce from '@/components/Tinymce'

export default {
  name: 'welcomwrods',
  data() {
    return {
      current: ['staff'],
    }
  },
  components: {},
  watch: {},
  methods: {},
}
</script>

<style scoped lang="less">
@import url('@/style/marketing/welcome/welcomewords.less');
</style>
