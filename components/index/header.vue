<template>
  <div class="home_header" id="home_header">
    <div class="bar" :class="{'active': is_active}">
      <div class="logo">
        <router-link to="/">
          <span class="particletext hearts heartsP hover_hand">TieTou</span>
        </router-link>
      </div>
      <div class="tool particletext bubbles bubblesP">
        <router-link to="/login">
          <no-ssr>
            <touch-ripple class="hover_hand submit_button">
              <span>登录</span>
            </touch-ripple>
          </no-ssr>
        </router-link>
        <span>|</span>
        <router-link to="/login">
          <no-ssr>
            <touch-ripple class="hover_hand submit_button">
              <span>注册</span>
            </touch-ripple>
          </no-ssr>
        </router-link>
      </div>
    </div>

    <div class="bac">
      <router-link to="/user">
        <no-ssr>
          <touch-ripple class="hover_hand submit_button"  :class="{'is_active': $route.name.slice(0, 4) === 'user'}">
            <i class="icon ion-ios-person"></i>
            <p>我的</p>
          </touch-ripple>
        </no-ssr>
      </router-link>

      <router-link to="/article">
        <no-ssr>
          <touch-ripple class="hover_hand submit_button" :class="{'is_active': $route.name.slice(0, 7) === 'article'}">
            <i class="icon ion-ios-filing"></i>
            <p>文章</p>
          </touch-ripple>
        </no-ssr>
      </router-link>

      <router-link to="/category">
        <no-ssr>
          <touch-ripple class="hover_hand submit_button"  :class="{'is_active': $route.name.slice(0, 8) === 'category'}">
            <i class="icon ion-ios-keypad"></i>
            <p>分类</p>
          </touch-ripple>
        </no-ssr>
      </router-link>

      <router-link to="/tag">
        <no-ssr>
          <touch-ripple class="hover_hand submit_button" :class="{'is_active': $route.name.slice(0, 3) === 'tag'}">
            <i class="icon ion-ios-pricetags"></i>
            <p>标签</p>
          </touch-ripple>
        </no-ssr>
      </router-link>

      <div>
        <i class="icon ion-ios-search"></i>
        <p>搜索</p>
      </div>

    </div>
  </div>
</template>

<script>
  import {hearts, bubbles} from "~/assets/js/particle_font";

  export default {
    data() {
      return {
        is_active: false
      }
    },
    mounted() {
      let home_header = document.getElementById("home_header");
      let h = home_header.offsetHeight

      let that = this
      window.addEventListener("scroll", function (e) {
        let t = document.documentElement.scrollTop || document.body.scrollTop
        if (t > h - 10)
          that.is_active = true
        else
          that.is_active = false
      })

      hearts('heartsP', 30, 30, 50)
      bubbles('bubblesP', 50, 80, 100)
    },
    components: {
    }
  }
</script>
<!---->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .home_header
    min-width 1024px
    width 100%
    background transparent
    background-image url('~assets/images/Iknseg5ozJw.jpg')
    background-attachment fixed
    .bar
      position fixed
      top 0
      left 0
      width 100%
      height 30px
      line-height 30px
      color #ffffff
      display flex
      flex-direction row
      justify-content space-between
      &.active
        background rgba(0, 0, 0, .2)
        color #000000
      .logo
        padding-left 15px
        font-size 16px
        font-weight bold
        a
          color #f7f8fb
      .tool
        padding-right 15px
        a
          color #f7f8fb
        span
          padding 0 5px
          display inline-block
    .bac
      padding 150px 0
      display flex
      flex-direction row
      justify-content center
      align-content center
      text-align center
      div
        i
          font-size 20px
          padding 0 15px
          color #ffffff
          position relative
          left -8px
        p
          margin-top 5px
          color #fff
          font-weight bold
        &.is_active
          i
            color $color-url
          p
            color $color-url
</style>
