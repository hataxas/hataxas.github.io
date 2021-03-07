// Джава скрипт начинает выполняться после загрузки окна
window.onload = function () {

  // выбираем наши элементы формы
  const checkboxWrappers = document.querySelectorAll(".checkbox");
  const checkboxes = document.querySelectorAll(".checkbox input");
  const radioWrappers = document.querySelectorAll(".radiobuttons__item");
  const radiobuttons = document.querySelectorAll(".radiobuttons__item input");

  for (let i = 0; i < checkboxWrappers.length; i++) {
    if (checkboxes[i].checked) {
      checkboxWrappers[i].classList.add("active");
    }
    checkboxWrappers[i].addEventListener("click", function () {
      if (checkboxes[i].checked) {
        checkboxes[i].checked = false;
        this.classList.remove("active");
      } else {
        checkboxes[i].checked = true;
        this.classList.add("active");
      }
    });
  }

  for (let i = 0; i < radioWrappers.length; i++) {
    if (radiobuttons[i].checked) {
      radioWrappers[i].classList.add("active");
    }
    radioWrappers[i].addEventListener("click", function () {
      for (let j = 0; j < radioWrappers.length; j++) {
        radiobuttons[i].checked = false;
        radioWrappers[j].classList.remove("active");
      }
      radiobuttons[i].checked = true;
      radioWrappers[i].classList.add("active");
    });
  }
}
