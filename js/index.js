$(document).ready(function() {
  $('.name__list li').click(function(e) {
    e.preventDefault();
    var index = $(this).index();
    $('.name__list li.on').removeClass('on');
    $(this).addClass('on');
    $('article.on').removeClass('on');
    $('article').eq(index).addClass('on');
    for (var i = 0; i < 5; i++) {
      $('article').eq(i).css({
        'transform': 'translateZ(' + ((-5000 * i) + (5000 * index)) + 'px)'
      });
    }
  });
});