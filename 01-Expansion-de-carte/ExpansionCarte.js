const $cards = $('.card');

$cards.on('click', function() {
    removeActiveClasses();
    $(this).addClass('active');
});

function removeActiveClasses() {
    $cards.removeClass('active');
}