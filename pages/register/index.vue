<template>
    <div>
        <main class="site-wrapper">
            <div class="content">
                <div class="slide-wrapper">
                    <div class="slide-item">
                        <img src="~/assets/images/login.jpg"
                             class="slide-item__image">
                    </div>
                </div>
            </div>
        </main>

        <v-login :type="'reg'"></v-login>
    </div>
</template>

<script>
  if (typeof window !== 'undefined') {
    require('~/assets/js/pixi.min.js')
    require('~/assets/js/main5.js')
    require('~/assets/js/imagesloaded.pkgd.min.js')
  }
  import VLogin from '~/components/auth/login'
  export default {
    layout: 'login',
    data() {
      return {
      }
    },
    head() {
      return {
        title: '注册'
      }
    },
    mounted() {

    },
    components: {
      VLogin
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
