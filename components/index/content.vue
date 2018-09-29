<template>
    <div class="home_content">
        <v-time-line :articles="articles"></v-time-line>
    </div>
</template>

<script>
  import VTimeLine from '~/components/common/timeline'

  export default {
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      this.__init()
    },
    methods: {
      __init() {
        this.articles.push({
          content: '2018',
        })
        this.articles.push({
          time: '18-08',
          content: 'Ubuntu 16 上部署 LNMP 环境',
        })

        for (let i = 1; i < 20; i++) {
          setTimeout(()=> {
            this.articles.push({
              time: '18-08',
              content: 'Ubuntu 16 上部署 LNMP 环境' + i,
            })
          }, 1000 * i)
        }
      }
    },
    components: {
      VTimeLine
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~assets/stylus/variable"
    .home_content
        width 600px
        margin 0 auto
        .main
            .article
                margin-top 15px
                border-bottom 1px dashed $color-fg
                .title
                    font-size $font-size-medium-x
                    color $color-title
                    font-weight bold
                .tags
                    display flex
                    flex-direction row
                    span
                        color $color-fz
                        padding-right 5px
                        margin 5px
                        border-right 1px solid $color-border
                        display inline-block
                        &:last-child
                            border-right none
                .preview
                    text-indent 24px
                    line-height 15px
                    padding-top 5px
                    color $color-fz
                .tool
                    padding-top 5px
                    float right
                    i
                        font-size 16px
                        padding 0 5px
                    span
                        padding 0 5px
</style>
