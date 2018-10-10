<template>
    <section class="user_section">
        <v-wait v-if="loading"></v-wait>
        <div class="content">
            <div class="user_info">

                <div class="avatar">
                    <router-link to="/user">
                        <no-ssr>
                            <touch-ripple class="hover_hand submit_button">
                                <img src="https://lccdn.phphub.org/uploads/avatars/10512_1513244746.jpeg?imageView2/1/w/100/h/100"
                                     alt="">
                            </touch-ripple>
                        </no-ssr>
                    </router-link>
                    <p>Levan</p>
                    <p>注册于：2018-09-09</p>
                    <p></p>
                </div>

                <div class="my_line_box_online">
                    <span class="my_line line-t"></span>
                </div>

                <div class="menu">
                    <div>
                        <router-link to="/user/setting">
                            <no-ssr>
                                <touch-ripple class="hover_hand submit_button">
                                    我的设置
                                </touch-ripple>
                            </no-ssr>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/user/collect">
                            <no-ssr>
                                <touch-ripple class="hover_hand submit_button">
                                    我的收藏
                                </touch-ripple>
                            </no-ssr>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/user/comment">
                            <no-ssr>
                                <touch-ripple class="hover_hand submit_button">
                                    我的评论
                                </touch-ripple>
                            </no-ssr>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="my_line_box_online">
                <span class="my_line line-r"></span>
            </div>

            <div class="detail">
                <slot name="content"></slot>
                <nuxt-child/>
            </div>

        </div>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      this.loading = false
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .user_section
        .content
            display flex
            .user_info
                flex 25%
                .avatar
                    text-align center
                    p
                        margin 5px
                    img
                        border-radius 50%
                .menu
                    margin-top 30px
                    text-align center
                    & > div
                        margin 10px
            .detail
                flex 75%
                padding 0 15px
</style>
