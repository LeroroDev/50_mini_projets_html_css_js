const smallCups = $('.cup-s');
const litres = $('#litres');
const percentage = $('#percentage');
const restToDrink = $('#restToDrink');

updateBigCup();

smallCups.each(function (idx, cup) {
  $(cup).click(function () {
    highlightCups(idx);
  });
});

function highlightCups(idx) {
  if (idx === 7 && smallCups.eq(idx).hasClass('full')) idx--;
  else if (smallCups.eq(idx).hasClass('full') && !smallCups.eq(idx).next().hasClass('full')) {
    idx--;
  }

  smallCups.each(function (idx2, cup) {
    if (idx2 <= idx) {
      $(cup).addClass('full');
    } else {
      $(cup).removeClass('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = $('.cup-s.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.css({ visibility: 'hidden', height: 0 });
  } else {
    percentage.css({
      visibility: 'visible',
      height: `${(fullCups / totalCups) * 330}px`,
    });
    percentage.text(`${(fullCups / totalCups) * 100}%`);
  }

  if (fullCups === totalCups) {
    restToDrink.css({ visibility: 'hidden', height: 0 });
  } else {
    restToDrink.css({ visibility: 'visible' });
    litres.text(`${2 - 250 * (fullCups / 1000)}L`);
  }
}
