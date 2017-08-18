'use strict';

var carousel = [];

function Carousel(src, alt) {
  this.src = src;
  this.alt = alt;
}

var $carousel = $('.carousel img');

Carousel.getImages = function() {
  $.each($carousel, function() {
    var $src = $(this).attr('src');
    var $alt = $(this).attr('alt');
    carousel.push(new Carousel($src, $alt));
  });
};

Carousel.toHTML = function() {

};

$(function() {
  Carousel.getImages();
});
