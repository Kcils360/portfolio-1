'use strict';

var carousel = [];

function Carousel(src, alt) {
  this.src = src;
  this.alt = alt;
}

Carousel.getImages = function() {

  $.each($('.carousel img'), function() {
    var $src = $(this).attr('src');
    var $alt = $(this).attr('alt');
    carousel.push(new Carousel($src, $alt));
  });
};



Carousel.toHTML = function() {
  var $lfChevron = `<div class="ca-button ca-left">&#12296;</div>`;
  var $rtChevron = `<div class="ca-button ca-right">&#12297;</div>`;

  $('.carousel').append($lfChevron, $rtChevron);
};

Carousel.navigation = function() {

  $('.carousel').on('click', '.ca-button', function() {
    console.log($(this));
  });
};

$(function() {
  Carousel.getImages();
  Carousel.navigation();
  Carousel.toHTML();
});
