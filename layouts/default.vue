<template>
  <div class="default">
    <v-header></v-header>
    <div class="main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import VHeader from '~/components/index/header'
  export default {
    data() {
      return {}
    },
    head() {
      return {
        title: 'zzz'
      }
    },
    mounted() {
    },
    components: {
      VHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .default
    &>.main
      width 1024px
      margin 30px auto
      padding 15px
</style>
