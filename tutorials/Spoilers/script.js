const title = document.querySelectorAll('.block__title');
const text = document.querySelectorAll('.block__text');
const block = document.querySelector('.block');

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function (e) {
    e.preventDefault();
    if (block.getAttribute('class') == 'block one') {
      for (let j = 0; j < title.length; j++) {
        title[j].classList.remove('active');
        text[j].classList.remove('active');
      }
    }
    title[i].classList.toggle('active');
    text[i].classList.toggle('active');
  });
}
