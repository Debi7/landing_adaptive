//обертка
const slidesWrapper = document.getElementsByClassName('slides__wrapper')[0];

//лишки
const slidesItem = document.getElementsByClassName('slides__item');

//кнопка prev
const prev = document
  .querySelector('#previous')
  .addEventListener('click', prevSlide);

//кнопка next
const next = document
  .querySelector('#next')
  .addEventListener('click', nextSlide);

function nextSlide() {
  const newSlidesWrapper = Array.from(slidesWrapper.children); //создали массив из лишек

  const slide = newSlidesWrapper.shift(); //извлекли первый элемент массива с индексом[0]
  slide.classList.add('hidden'); //скрыли его
  newSlidesWrapper.push(slide); //запушили его в конец массива

  const slideHidden = newSlidesWrapper[2]; //в переменную slideHidden положили 3 элемент с индексом[2]
  slideHidden.classList.remove('hidden'); //убрали ему невидимость

  slidesWrapper.innerHTML = ''; //обнулили содержание враппера (обнулили контент ul-html)
  newSlidesWrapper.forEach((element) => { //прошлись по массиву из лишек по каждому элементу
    slidesWrapper.appendChild(element); //appendchild собирает весь контент из массива и добавляет этот массив в элемент враппер (массив с изменениями, которые в нем уже сделали выше)
  });
}


function prevSlide() {
  const newSlidesWrapper = Array.from(slidesWrapper.children); //тут у каждой переменной своя область видимости, они не пересекаются - и поэтому можно использовать ту же самую переменную в которую положили массив

  const prevElem = newSlidesWrapper[2]; //в переменную prevElem положили 3 элемент с индексом[2]
  prevElem.classList.add('hidden'); //скрыли его

  const elEnd = newSlidesWrapper.pop(); //из массива лишек - извлекли последний элемент массива (6-й элемент)
  elEnd.classList.remove('hidden'); //убрали у него hidden 
  newSlidesWrapper.unshift(elEnd); //добавили его в начало массива (6 элемент стал первым элементом с индексом[0])

  slidesWrapper.innerHTML = '';
  newSlidesWrapper.forEach((element) => {
    slidesWrapper.appendChild(element);
  });
}
