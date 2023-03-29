// Sélectionner les éléments de la page
const toggles = $('.toggle');
const good = $('#good');
const cheap = $('#cheap');
const fast = $('#fast');

// Eventlistener toggle sur les élément "toggle"
toggles.on('change', function(e) {
    doTheTrick(e.target);
});

// Fonction qui désactive une case si les deux autres sont cochées 
function doTheTrick(theClickedOne) {
    if(good.is(':checked') && cheap.is(':checked') && fast.is(':checked')) {
        if(good[0] === theClickedOne) {
            fast.prop('checked', false);
        }

        if(cheap[0] === theClickedOne) {
            good.prop('checked', false);
        }

        if(fast[0] === theClickedOne) {
            cheap.prop('checked', false);
        }
    }
}