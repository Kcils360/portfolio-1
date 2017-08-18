'use strict';

var carousel = [];

function Carousel(src, alt) {
  this.src = src;
  this.alt = alt;
}

Carousel.getImages = function() {
  $.each($('.carousel img'), function() {
    var $src = $(this).attr('src');
    var $alt = '';
    if (!$(this).attr('alt')) {
      $alt = $(this).attr('alt');
    }

    carousel.push(new Carousel($src, $alt));
    $(this).remove();
  });
};

Carousel.toHTML = function() {
  var imgCont = `<img src="${carousel[0].src}" alt="" />`;
  var lfChevron = `<div class="ca-button ca-left">&#12296;</div>`;
  var rtChevron = `<div class="ca-button ca-right">&#12297;</div>`;

  // $('.carousel img').attr('src', carousel[0].src).attr('alt', carousel[0].alt);
  $('.carousel').append(imgCont, lfChevron, rtChevron);
  $('.carousel img').show();
};

Carousel.navigation = function() {
  var currIndex = 0;
  $('.carousel').on('click', '.ca-button', function() {
    var $img = $('.carousel img');
    $img.fadeOut('slow');
    $img.fadeIn('slow');
    if ($(this).hasClass('ca-left')) {
      console.log('left');
      currIndex--;
      if (currIndex < 0) {
        currIndex = carousel.length - 1;
      }
    }
    if ($(this).hasClass('ca-right')) {
      console.log('right');
      currIndex++;
      if (currIndex >= carousel.length) {
        currIndex = 0;
      }
    }
    console.log(currIndex);
    $img.attr('src', carousel[currIndex].src).attr('alt', carousel[currIndex].alt);
  });
};

$(function() {
  Carousel.getImages();
  Carousel.navigation();
  Carousel.toHTML();
});
