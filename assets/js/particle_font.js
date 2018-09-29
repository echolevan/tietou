export function bubbles(class_name, num, min_size, max_size) {
  $.each($("."+class_name), function () {
    let bubblecount = ($(this).width() / num) * 10;
    for (let i = 0; i <= bubblecount; i++) {
      let size = ($.rnd(min_size, max_size) / 10);
      $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

export function hearts(class_name, num, min_size, max_size) {
  $.each($("."+class_name), function () {
    let heartcount = ($(this).width() / num) * 5;
    for (let i = 0; i <= heartcount; i++) {
      let size = ($.rnd(min_size, max_size) / 10);
      $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

export function lines() {
  $.each($(".particletext.lines"), function () {
    let linecount = ($(this).width() / 50) * 10;
    for (let i = 0; i <= linecount; i++) {
      $(this).append('<span class="particle" style="top:' + $.rnd(-30, 30) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

export function confetti() {
  $.each($(".particletext.confetti"), function () {
    let confetticount = ($(this).width() / 50) * 10;
    for (let i = 0; i <= confetticount; i++) {
      $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

export function fire() {
  $.each($(".particletext.fire"), function () {
    let firecount = ($(this).width() / 50) * 20;
    for (let i = 0; i <= firecount; i++) {
      let size = $.rnd(8, 12);
      $(this).append('<span class="particle" style="top:' + $.rnd(40, 70) + '%; left:' + $.rnd(-10, 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 20) / 10) + 's;"></span>');
    }
  });
}

export function sunbeams() {
  $.each($(".particletext.sunbeams"), function () {
    let linecount = ($(this).width() / 50) * 10;
    for (let i = 0; i <= linecount; i++) {
      $(this).append('<span class="particle" style="top:' + $.rnd(-50, 0) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(80, 160) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
    }
  });
}

$.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
}
