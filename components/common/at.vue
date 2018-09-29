<template>
  <div class="atwho">
    1555
    <textarea cols="30" rows="10" @keydown="handleKeyDown" class="talk_box"></textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      handleKeyDown(e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
