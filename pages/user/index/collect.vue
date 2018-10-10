<template>
    <section>
        collect
    </section>
</template>

<script>
  import VUserIndex from '~/components/user/index'

  export default {
    data() {
      return {}
    },
    head() {
      return {
        title: '用户中心-收藏'
      }
    },
    mounted() {
      console.log(this.$route)
    },
    components: {
      VUserIndex
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
