$(document).ready(function() {
    const $left = $('.left');
    const $right = $('.right');
    const $container = $('.container');
  
    $left.on('mouseenter', function() {
      $container.addClass('hover-left');
    });
  
    $left.on('mouseleave', function() {
      $container.removeClass('hover-left');
    });
  
    $right.on('mouseenter', function() {
      $container.addClass('hover-right');
    });
  
    $right.on('mouseleave', function() {
      $container.removeClass('hover-right');
    });
  });
  