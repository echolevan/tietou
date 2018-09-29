<template>
  <div>
    <div class="loader loader-10"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loader {
    width: 50px
    height: 50px
    border-radius: 50%
    display: inline-block
    position: absolute
    left 50%
    top 50%
    margin 0 -25px 0 -25px
    vertical-align: middle
  }

  .loader, .loader:before, .loader:after {
    animation: 1s infinite ease-in-out
  }

  .loader:before, .loader:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .loader-10 {
    animation: loader10 60s infinite ease-in-out;
  }

  .loader-10:before {
    content: '';
    width: 80%;
    height: 80%;
    background-color: white;
    top: 10%;
    left: 10%;
    box-shadow: 5px -3px 0 rgba(255, 100, 100, 0.7), 5px 5px 0 rgba(100, 255, 100, 0.7), -3px 5px 0 rgba(100, 100, 255, 0.7), -5px -5px 0 rgba(240, 240, 120, 0.7);
  }

  .loader-10:after {
    content: '';
    border: 3px solid white;
    z-index: 2;
    top: -3px;
    left: -3px;
  }

  @keyframes loader10 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360000deg);
    }
  }
</style>
