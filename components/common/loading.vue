<template>
  <div></div>
</template>

<script>
  import NProgress from 'nprogress'

  export default {
    data() {
      return {}
    },
    methods: {
      start() {
        NProgress.start()
      },
      finish() {
        NProgress.done()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
