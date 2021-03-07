//! инициализируем слайдер
var mySwiper = new Swiper('.image-slider', {

  //! стрелки для переключения слайдов
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  //! Навигация
  //? буллеты, текущее положение, прогрессбар (одновременно может работать что-то одно)
  pagination: {
    //el: '.swiper-pagination', //? включаем навигацию

    //! Bullets (точки для навигации)
    // type: 'bullets', //? по умолчанию
    // clickable: true, //? чтобы можно было переключать слайды кликая на точки
    //dynamicBullets: true, //? включаем динамические буллеты
    // //? добавляем номера к нашим буллетам
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    //! Фракция (номер слайда из общего колличества слайдов)
    //type: 'fraction',
    //? добавляем слова к цифрам (например: фото 5 из 6)
    // renderFraction: function (currentClass, totalClass) {
    //   return 'Фото <span class="' + currentClass + '"></span>' +
    //     ' из ' +
    //     '<span class="' + totalClass + '"></span>';
    // },

    //! Прогрессбар (полоса показывающая прогресс просмотра слайдов)
    //type: 'progressbar'
  },

  //! Скролл
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true //? включаем возможность перетаскивать скролл
  // },

  //! Параметры перетаскивания слайдов
  simulateTouch: true, //? перетаскивание на ПК
  touchRatio: 1, //? чувствительность свайпа (0 отключает перетаскивание)
  touchAngle: 45, //? угол срабатывания свайпа
  grabCursor: true, //? курсор перетаскивания (в форме руки)
  slideToClickedSlide: true, //? кликнуть на слайд чтобы перейти к нему

  //! Навигация по хешу (у каждого слайда появляется свой адресс (видно в адрессной строке))
  hashNavigation: {
    watchState: true //? отслеживать состояние
  },

  //! Управление клавиатурой
  keyboard: {
    enabled: true, //? включить/выключить
    onlyInViewport: true, //? включить/выключить только когда слайдер в пределах вьюпорта
    pegeUpDown: true //? включить/выключить управление клавишами pegeUp, pageDown
  },

  //! Управление колесом мыши
  mousewheel: {
    sensitivity: 1, //? чувствительность колеса мыши
    //eventsTarget: '.image-slider' //? класс объекта на котором будет срабатывать прокрутка мышью (если несколько слайдеров прокручиваться будут все c данным классом)
  },

  //! Автовысота (высота слайдера подстраивается под высоту картинки)
  autoHeight: true,

  //! Колличество слайдов для показа
  slidesPerView: 1, //? по умолчанию значение 1 (можно указывать дробные числа) можно указать значение 'auto', для этого в css нужно слайдам задать width: auto;

  //! Если слайдов меньше, чем нужно, можно отключать функционал слайдера, который включится автоматически когда слайдов будет достаточно
  watchOverflow: true,

  //! Отступ между слайдами
  spaceBetween: 0, //? значение указывается в px

  //! Колличество пролистываемых слайдов
  slidesPerGroup: 1,

  //! Делаем активным центральный слайд
  //centeredSlides: true,

  //! Указываем стартовый активный слайд
  initialSlide: 0, //? отсчет идет с 0 (не работает)

  //! Мультирядность
  //slidesPerColumn: 2, //? если хотим использовать, нужно отключить автовысоту а в css нужно задать высоту для слайдера и для слайдов

  //! Бесконечный (зацикленный) слайдер
  //loop: true,

  //! Колличество дублирующих слайдов (для бесконечного слайдера если задан режим slidesPerView: 'auto')
  //loopedSlides: 3,

  //! Свободный режим
  //freeMode: true, //? у слайдов нет фиксированных позиций (где остановился слайд там остается)

  //! Автопрокрутка
  // autoplay: {
  //   delay: 1000, //? пауза между прокруткой, ms
  //   stopOnLastSlide: true, //? закончить на последнем слайде
  //   disableOnInteraction: false, //? отключить после ручного переключения
  // },

  //! Скорость переключения слайдов
  speed: 300, //? для плавности переключения

  //! Вертикальный слайдер
  //direction: 'vertical', //? чтобы коректно работал нужно в css установить высоту слайдера

  //! Эффекты переключения слайдов

  //effect: 'slide', //? Листание (включен по умолчанию)

  // effect: 'fade', //? Постепенная смена прозрачности
  // fadeEffect: {
  //   crossFade: true
  // },

  // effect: 'flip', //? Переворот слайда
  // flipEffect: {
  //slideShadows: false, //? тень слайда (по умолчанию true)
  //limitRotation: false, //? показ только активного слайда (по умолчанию true)
  // },

  //effect: 'cube', //? Cлайды становятся сторонами куба, который вращается (лучше убрать отступы между слайдами)
  // cubeEffect: {
  //   //? настройка теней (по умолчанию тени включены), в css нужно ограничить ширину слайдера
  //   slideShadows: false,
  //   shadow: false,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },

  //effect: 'coverflow', //? листает как бы гармошкой (лучший эффект достигается когда на экран выводится несколько слайдов)
  // coverflowEffect: {
  //   rotate: 20, //? угол поворота слайда
  //   stretch: 50, //? наложение слайдов
  //   slideShadows: true, //? тень
  // },

  //! Адаптивность (mobile first)
  // breakpoints: {
  //   100: {  //? если ширина экрана больше чем 100px
  //     slidesPerView: 1,
  //   },
  //   480: {  //? если ширина экрана больше чем 480px
  //     slidesPerView: 2,
  //   },
  //   992: {  //? если ширина экрана больше чем 992px
  //     slidesPerView: 3,
  //   },
  // },

  //! Отключение предзагрузки картинок (ускоряет загрузку сайта)
  preloadImages: false,
  //! Lazy Loading (подгрузка картинок)
  lazy: {
    loadOnTransitionStart: false, //? подгружать на старте переключения слайда
    loadPrevNext: true, //? подгружать предыдущую и следующую картинки
  },
  //! Cлежка за видимыми слайдами
  watchSlidesProgress: true, //? включаем когда slidesPerView: 'auto', либо больше 1
  //! Добавление класса видимым слайдам
  watchSlidesVisibility: true, //? включаем когда slidesPerView: 'auto', либо больше 1

  //! Зум картинки
  zoom: {
    maxRatio: 2, //? максимальное увеличение (при двойном клике на активную картинку она увеличивается и ее можно таскать чтобы рассмотреть)
    minRatio: 1, //? минимальное увеличение
  },

  //! Миниатюры (превью)
  thumbs: {
    swiper: {
      el: '.image-mini-slider',
      slidesPerView: 6,
      spaceBetween: 5,
    }
  },

  //! Oбновление слайдера
  observer: true, //? автоматическое обновление при изменении элементов слайдера
  observeParents: true, //? при изменении родительских элементов слайдера
  observeSlideChildren: true, //? при изменении дочерних элементов слайда

  //! Виртуальные слайды (формирование слайдера из динамически появляющихся картинок)
  //? С этим нужно будет разобраться
  // virtual: {
  //   slides: (function () {
  //     let slide = []
  //     for (let i = 0; i < 20; i++) {
  //       slide.push(`<div class='image-slider__text'>Cлайд №${i}</div>`);
  //     }
  //     return slide;
  //   }()),
  // },

  //! События (запрос информации о событии внутри слайдера)
  // on: {
  //   init: function () {
  //     console.log('Слайдер запущен!');
  //   },
  //   slideChange: function () {
  //     console.log('Слайд переключен');
  //   }
  // },
});


//! События (запрос информации о событии снаружи слайдера)
mySwiper.on('slideChange', function () {
  console.log('Слайд переключен');
});

//todo Пример использования eventListener для включения автопрокрутки при наведении мыши на слайдер

// let sliderBlock = document.querySelector('.image-slider');
// sliderBlock.addEventListener('mouseenter', function (e) {
//   mySwiper.params.autoplay.disableOnInteraction = false;
//   mySwiper.params.autoplay.delay = 500;
//   mySwiper.autoplay.start();
// });
// sliderBlock.addEventListener('mouseleave', function (e) {
//   mySwiper.autoplay.stop();
// });
