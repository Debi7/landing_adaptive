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
  const newSlidesWrapper = Array.from(slidesWrapper.children); 

  const slide = newSlidesWrapper.shift(); 
  slide.classList.add('hidden'); 
  newSlidesWrapper.push(slide); 

  const slideHidden = newSlidesWrapper[2]; 
  slideHidden.classList.remove('hidden'); 

  slidesWrapper.innerHTML = ''; 
  newSlidesWrapper.forEach((element) => { 
    slidesWrapper.appendChild(element); 
  });
}


function prevSlide() {
  const newSlidesWrapper = Array.from(slidesWrapper.children); 

  const prevElem = newSlidesWrapper[2]; 
  prevElem.classList.add('hidden'); 

  const elEnd = newSlidesWrapper.pop(); 
  elEnd.classList.remove('hidden'); 
  newSlidesWrapper.unshift(elEnd); 

  slidesWrapper.innerHTML = '';
  newSlidesWrapper.forEach((element) => {
    slidesWrapper.appendChild(element);
  });
}
