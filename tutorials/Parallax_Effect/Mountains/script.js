window.addEventListener('scroll', function () {
  // в эту переменную мы получаем колличество прокрученных пикселей в окне браузера
  let s = window.scrollY;
  // ширина окна браузера
  let w = document.querySelector('body').offsetWidth;
  // высота контентной части
  let h = document.querySelector('.content').offsetHeight;
  // высота верхнего блока
  let h_b = document.querySelector('.parallax').offsetHeight;

  // вычислим coeff прокрутки всей контентной части
  let p = s / h;
  // вычислим coeff прокрутки верхней части
  let p_b = s / h_b;
  // вычисляем будущую непрозрачность
  let o = 1 - p_b; // opacity???

  //! zoom the fog
  // вычисляем zoom для тумана
  let zoom = 1 + (w / 100 * p_b);
  let parallaxFog = document.querySelector('.parallax__fog');
  parallaxFog.style.transform = 'scale(' + zoom + ')'; // увеличиваем фотографию тумана (он как будто приближается)
  parallaxFog.style.opacity = o; // делаем туман прозрачным (чтобы не закрывал текст)

  //! увеличиваем гору на заднем фоне при zoom
  // вычисляем zoom для первой горы (скорость увеличения равна 50000, если задать меньшее число - будет увеличиваться быстрее)
  let zoom_1 = 1 + (w / 50000 * p);
  let parallaxMountain1 = document.querySelector('.parallax__mountain-1');
  parallaxMountain1.style.transform = 'scale(' + zoom_1 + ')';

  //! Задаем смещение второй горе при прокрутке
  // вычисляем zoom для второй горы (скорость увеличения равна 50000, если задать меньшее число - будет увеличиваться быстрее)
  let zoom_2 = 1 + (w / 2000 * p_b);
  // вычисляем на сколько px будет смещаться вправо по оси x гора 2
  let hr_2 = w / 20 * p_b;
  let parallaxMountain2 = document.querySelector('.parallax__mountain-2');
  parallaxMountain2.style.transform = 'translate3d(' + hr_2 + 'px, 0px, 0px) scale(' + zoom_2 + ')';

  //! Задаем смещение третьей горе при прокрутке
  // вычисляем zoom для третьей горы (скорость увеличения равна 1000, если задать меньшее число - будет увеличиваться быстрее)
  let zoom_3 = 1 + (w / 1000 * p_b);
  // вычисляем на сколько px будет смещаться вправо по оси x гора 2
  let hr_3 = w / 15 * p_b;
  let parallaxMountain3 = document.querySelector('.parallax__mountain-3');
  parallaxMountain3.style.transform = 'translate3d(' + hr_3 + 'px, 0px, 0px) scale(' + zoom_3 + ')';
});
