<template>
    <section class="time_line">
        <no-ssr>
            <Timeline v-if="articles.length > 0">
                <TimelineItem :color="article.time ? color : 'blue'" v-for="(article, index) in articles" :key="index">
                    <div class="content hover_hand hover_line"
                         v-mouse="{'index': index === 0 ? 'false' : index}">
                        <span class="time" v-if="article.time">{{article.time}}</span>
                        {{article.content}}
                        <v-hover-line :id="index"></v-hover-line>
                    </div>
                </TimelineItem>
            </Timeline>
        </no-ssr>
    </section>
</template>

<script>
  import VHoverLine from '~/components/common/hoverLine.vue'
  export default {
    data() {
      return {}
    },
    props: {
      articles: {
        type: Array,
        default() {
          return []
        }
      },
      color: {
        type: String,
        default: '#333333'
      }
    },
    mounted() {
      // console.log(this.articles)
    },
    methods: {
      aaa(index) {
        this.$refs[`hover_line_${index}`][0].is_show='show'
      },
      bbb(index) {
        this.$refs[`hover_line_${index}`][0].is_show='hide'
      }
    },
    components: {
      VHoverLine
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~assets/stylus/variable"
    .time_line
        .content
            font-size 16px
            color $color-zw
            padding-bottom 15px
            border-bottom 1px dashed $color-fg
        .time
            margin-right 6px
            font-size 13px
        .ivu-timeline-item:first-child
            .content
                font-size 20px
                color $color-title
                border-bottom none
</style>
