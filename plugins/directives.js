import Vue from 'vue'

Vue.directive('mouse', {
  bind: function (el, binding) {
    if (binding.value.index === 'false') {
      return false
    }
    el.addEventListener('mouseenter', function (e) {
      // console.log(e)
      e.preventDefault()
      let dom = document.getElementById(`my_line_box_${binding.value.index}`)
      dom.className = `my_line_box my_line_box_stroke`
    })
    el.addEventListener('mouseleave', function (e) {
      e.preventDefault()
      let dom = document.getElementById(`my_line_box_${binding.value.index}`)
      dom.className = `my_line_box my_line_box_stroke_reverse`
    })
  }
})

