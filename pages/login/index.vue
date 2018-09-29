<template>
  <div>
    <main class="site-wrapper">
      <div class="content">
        <div class="slide-wrapper">
          <div class="slide-item">
            <img src="http://om63nsjit.bkt.clouddn.com/386ae80d40cee1c29ca2235c838f7f98.jpg" class="slide-item__image">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  if (typeof window !== 'undefined') {
    require('~/assets/js/pixi.min.js')
    require('~/assets/js/main5.js')
    require('~/assets/js/imagesloaded.pkgd.min.js')
  }
  export default {
    layout: 'login',
    data() {
      return {}
    },
    mounted() {
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
