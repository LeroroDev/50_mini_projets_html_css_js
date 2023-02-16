const open = $('#open');
const close = $('#close');
const container = $('.container');

// Ajout event onClick sur bouton "open"
open.on('click', () => container.addClass('show-nav'));

// Ajout event onClick sur bouton "close"
close.on('click', () => container.removeClass('show-nav'));
