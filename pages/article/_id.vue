<template>
  <div class="article_show">
    <div class="title">在 Ubuntu 16 上部署 LNMP 环境</div>
    <div class="author">
      <span>Levan</span>
      <span>2018:15:15</span>
      <span>
         <i class="icon ion-ios-heart"></i>
         <i class="icon ion-ios-thumbs-up"></i>
         <i class="icon ion-ios-star"></i>
      </span>
    </div>
    <div style="clear: right"></div>
    <div class="content">
      使用了 Laravel china 社区中 Summer 的教程 Ubuntu 14/16 下的 Laravel LNMP 线上环境自动部署脚本
      此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
    </div>
    <div class="talking">
      <div class="t_content">
        <div class="user_info">
          <img src="https://lccdn.phphub.org/uploads/avatars/10512_1513244746.jpeg?imageView2/1/w/100/h/100" alt="123">
          <div class="info">
            <span>llll</span>
          </div>
        </div>
        <div class="content">
          <div class="floor_and_time">
            <span>#1</span>
            <span>-</span>
            <span>2周前</span>
          </div>

          <div class="text">
            Laravel china 社区中 Summer 的教程 Ubuntu 14/16 下的 Laravel LNMP 线上环境自动部署脚本
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
            此脚本用于在一台全新的 Ubuntu 14.04 LTS（ Ubuntu 16 请使用这个脚本） 上部署适合 Laravel 使用的 LNMP 生产环境。
          </div>
        </div>
      </div>
      <textarea class="talk_box"></textarea>
    <no-ssr>
        <touch-ripple class="hover_hand submit_button">
          <Button type="primary">Primary</Button>
        </touch-ripple>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  // import At from '~/components/common/at.vue'
  export default {
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    data() {
      return {
      }
    },
    head() {
      return {
        title: '123'
      }
    },
    mounted() {
    },
    components: {
      // At
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .article_show
    &>.title
      color $color-title
      font-size 16px
    &>.author
      float right
      margin 5px 0
      span
        display inline-block
        padding 0 10px
        border-right 1px solid $color-border
        &:last-child
          border-right none
        i
          padding 0 5px
    &>.content
      color $color-zw
      font-size 12px
      text-indent 24px
      line-height 18px
    &>.talking
      margin-top 15px
      width 100%
      border-top 2px dashed $color-border
      .t_content
        padding 15px 0
        border-bottom 1px solid $color-border
        display flex
        flex-direction row
        .user_info
          min-width 100px
          display flex
          flex-direction column
          text-align center
          &>img
            width 50px
            height 50px
            margin 0 auto
            border-radius 50%
          .info
            display flex
            flex-direction column
            &>span
              display block
              padding 5px 0
              font-size $font-size-small
        .content
          display flex
          flex-direction column
          .floor_and_time
            color $color-fz
            margin-bottom 5px
            span
              padding 0 2px
              display inline-block
      .talk_box
        width 100%
        height 120px
        border 1px solid $color-border
      .submit_button
        margin 5px 0
        float right
</style>
