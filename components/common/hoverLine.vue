<template>
    <div class="my_line_box"
         :id="`my_line_box_${id}`"
         style="top: 15px"
    >
        <span class="my_line line-t"></span>
    </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
