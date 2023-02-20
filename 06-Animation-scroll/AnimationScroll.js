$(document).ready(function() {
    const $boites = $('.boite');
    $(window).on('scroll', checkBoxes);
  
    checkBoxes();
  
    function checkBoxes() {
      const triggerBottom = $(window).innerHeight() / 5 * 4;
  
      $boites.each(function() {
        const boxTop = $(this).offset().top - $(window).scrollTop();
  
        if(boxTop < triggerBottom) {
          $(this).addClass('show');
        } else {
          $(this).removeClass('show');
        }
      });
    }
  });
  