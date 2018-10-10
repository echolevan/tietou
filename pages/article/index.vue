<template>
    <div>
        <v-content></v-content>
    </div>
</template>

<script>
  import VContent from '~/components/index/content'

  export default {
    data() {
      return {}
    },
    head() {
      return {
        title: '文章主页'
      }
    },
    mounted() {
      console.log()
    },
    components: {
      VContent
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
