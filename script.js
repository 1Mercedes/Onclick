// DOM Document Object Model
// BOM Browser Object Model

// const image = document.querySelector(".catalog__item") // HTML elementga bog`lanadi
// Birinchi shu selector bo`yicha to`g`ri kelgan elementga bog`lanadi!

const images = document.querySelectorAll('.catalog__item')
// Shu selector bo`yicha to`g`ri kelgan barcha elementlarga bo`glanib massiv qaytarib beradi.

// image.onclick = selectImage

function selectImage(bosilganRasm) {
  for (let i = 0; i < images.length; i++) {
    const rasm = images[i];
    rasm.classList.remove('catalog__item_big')
  }
  bosilganRasm.classList.add('catalog__item_big')
}



for (let i = 0; i < images.length; i++) {
  const rasm = images[i];
  rasm.onclick = function () {selectImage(rasm)}
}