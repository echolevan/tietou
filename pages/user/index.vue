<template>
    <v-user-index>
        <div slot="content" v-if="$route.path === '/user'">1111</div>
    </v-user-index>
</template>

<script>
  import VUserIndex from '~/components/user/index'

  export default {
    data() {
      return {}
    },
    mounted() {
    },
    components: {
      VUserIndex
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
