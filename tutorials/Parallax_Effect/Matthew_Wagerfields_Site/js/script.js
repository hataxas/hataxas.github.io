const wrapper = document.querySelector('.wrapper');

function addClass() {
  wrapper.classList.add('active');
}
setTimeout(addClass, 100);

// применяем параллакс https://github.com/wagerfield/parallax#3-methods
const lis = document.querySelectorAll('li');
for (let i = 0; i < lis.length; i++) {
  lis[i].classList.add('layer');
}
const scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
