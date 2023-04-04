const imgs = $('#imgs');
const leftBtn = $('#left');
const rightBtn = $('#right');

const img = $('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.css({
    transform: `translateX(${-idx * 500}px)`
  });
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.on('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.on('click', () => {
  idx--;
  changeImage();
  resetInterval();
});