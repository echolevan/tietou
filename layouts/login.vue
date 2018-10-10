<template>
  <div class="login_div">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      imagesLoaded(document.body, () => document.body.classList.remove('loading'));

      let spriteImages = document.querySelectorAll('.slide-item__image');
      let spriteImagesSrc = [];
      let texts = [];

      for (let i = 0; i < spriteImages.length; i++) {
        let img = spriteImages[i];
        // Set the texts you want to display to each slide
        // in a sibling element of your image and edit accordingly
        if (img.nextElementSibling) {
          texts.push(img.nextElementSibling.innerHTML);
        } else {
          texts.push('');
        }
        spriteImagesSrc.push(img.getAttribute('src'));
      }

      let initCanvasSlideshow = new CanvasSlideshow({
        sprites: spriteImagesSrc,
        displacementImage: 'https://media.tietou.xyz/clouds.jpg',
        autoPlay: true,
        autoPlaySpeed: [4, 3],
        displaceScale: [5000, 10000],
        interactive: false,
        interactionEvent: 'click', // 'click', 'hover', 'both'
        displaceAutoFit: false,
        dispatchPointerOver: true // restarts pointerover event after click
      });
    },
    destroyed() {
      $("canvas").remove()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
