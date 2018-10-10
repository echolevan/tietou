<template>
    <div class="tag_lists">
        <v-wait v-if="loading"></v-wait>
        <div class="tag_block hover_hand" v-for="(tag, index) in tags" :style="{fontSize: tag.num * 3 + 'px'}"
             v-mouse="{'index': index === 0 ? 'false' : index}">
            {{tag.name}}
            <v-hover-line :id="index"></v-hover-line>
        </div>
    </div>
</template>

<script>
  import VHoverLine from '~/components/common/hoverLine.vue'
  export default {
    data() {
      return {
        loading: true,
        tags: [
          {
            name: 'css',
            num: 2
          },
          {
            name: 'Js',
            num: 5
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 11
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          },
          {
            name: 'css',
            num: 2
          },
          {
            name: 'Js',
            num: 7
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 1
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          },
          {
            name: 'css',
            num: 1
          },
          {
            name: 'Js',
            num: 5
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 1
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          },
          {
            name: 'css',
            num: 2
          },
          {
            name: 'Js',
            num: 5
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 1
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          },
          {
            name: 'css',
            num: 16
          },
          {
            name: 'Js',
            num: 5
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 1
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          },
          {
            name: 'css',
            num: 2
          },
          {
            name: 'Js',
            num: 5
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 1
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          },
          {
            name: 'css',
            num: 2
          },
          {
            name: 'Js',
            num: 5
          },
          {
            name: 'Vue',
            num: 8
          },
          {
            name: 'Laravel',
            num: 1
          },
          {
            name: 'Laravel Echo Server',
            num: 6
          }
        ]
      }
    },
    head() {
      return {
        title: '标签'
      }
    },
    mounted() {
      this.loading = false
    },
    components: {
      VHoverLine
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~assets/stylus/variable"
    .tag_lists
        display inline-block
        .tag_block
            margin 0 15px
            padding 15px 0
            display inline-block
            border-bottom 1px dashed $color-fz
</style>
