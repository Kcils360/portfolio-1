'use strict';

var handleMainNav = function() {
  $('nav ul').on('click', 'li', function() {
    $('.tab-content').hide();
    $(`.tab-content[id=${$(this).attr('data-content')}]`).show();
  });
  $('.main-nav .tab:first').click();
};


$(function() {
  handleMainNav();
});
