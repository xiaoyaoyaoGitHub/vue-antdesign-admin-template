<template>
  <section class="welcome" style="height: 100%">
    <a-result status="403" title="敬请期待">
      <!-- <template #extra>
        <a-button type="primary"> Back Home </a-button>
      </template> -->
    </a-result>
  </section>
</template>

<script>
// import Tinymce from '@/components/Tinymce'

export default {
  name: 'Unrealized',
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
